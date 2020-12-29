module.exports = require("express").Router().delete("/", (req, res) => {
    let obj = { p_id: req.body.p_id };
    let mongodb = require("mongodb");
    let nareshIT = mongodb.MongoClient;
    nareshIT.connect("mongodb://localhost:27017/workshop", (err, db) => {
        db.collection("products").deleteOne(obj, (err, result) => {
            if (err) {
                res.send({ delete: "fail" });
            } else {
                res.send({ delete: "success" });
            }
        });
    });
});