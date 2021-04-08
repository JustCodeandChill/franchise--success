const mongoose = require("mongoose");
const Franchise = mongoose.model("franchises");

urlExtractAndReform = (str) => {
  // to transform req.url "/api/franchise/giao-duc" to option "giaoduc" for searching in dtbs;
  let option = str.split("/");
  option = option[option.length - 1];
  option = option.split("-"); 
  return option.join("");
}

module.exports = (app) => {
  app.get("/api/franchise/:id", async (req, res) => {
    const option = urlExtractAndReform(req.url)
    const franchises = await Franchise.find({ category: option });
    res.send(franchises);
  });
};
