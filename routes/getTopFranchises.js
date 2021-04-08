const mongoose = require("mongoose");
const FranchiseMinified = mongoose.model("top-franchises");

module.exports = (app) => {
  app.get("/api/franchise/tat-ca", async (req, res) => {
    const franchise = await FranchiseMinified.find();
    res.send(franchise);
  });
};
