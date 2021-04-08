const mongoose = require("mongoose");
const Franchise = mongoose.model("franchises");

module.exports = (app) => {
    app.get("/api/franchise/chi-tiet/:id", async (req,res) => {
        const franchise = await Franchise.findOne({ id: req.params.id });
        res.send(franchise)
    })
}