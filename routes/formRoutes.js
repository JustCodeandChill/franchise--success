const mongoose = require("mongoose");
const Subscriber = mongoose.model("subscribers");
const axios = require("axios");
const fs = require("fs");

const saveSubscriberNameinTxtFile = (name, email) => {
  let subs = `recipientName: ${name}, email : ${email} ,dateCreate : ${new Date().toUTCString()} \n`;

  fs.readFile("names.txt", function (err, buf) {
    console.log(buf);
  });

  fs.writeFile("names.txt", subs, { flag: "a+" }, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
};

const sendEmailthroughEmailJS = (recipientName, email) => {
  let data = {
    service_id: "gmail",
    template_id: "template_utaZlrzN",
    user_id: "user_8NImREsoE9g0ueap2lEG0",
    template_params: {
      to_name: "Alex Kimory",
      sub_name: recipientName,
      sub_email: email,
    },
  };

  axios
    .post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then((res) => {
      console.log("Email sent");
    })
    .catch((err) => {
      res.status(503).send("error");
    });
};
module.exports = (app) => {
  app.post("/api/form", async (req, res) => {
    const { recipientName, email } = req.body;
    // Save to database
    var newSub = new Subscriber({ recipientName: recipientName, email: email });
    await newSub.save(function (err) {
      console.log("savedddddd");
      //save to names.txt
      saveSubscriberNameinTxtFile(recipientName, email);

      //Send email to department lead
      console.log("in sending email");
      sendEmailthroughEmailJS(recipientName, email);
      if (err) res.status(500).send(err);
      // saved!
    });
  });
};
