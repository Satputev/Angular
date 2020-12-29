module.exports = require("express").Router().put("/", (req, res) => {
    let cond_obj = { p_id: req.body.p_id };
    let update_obj = { $set: { p_name: req.body.p_name, p_cost: req.body.p_cost } };
    let mongodb = require("mongodb");
    let nareshIt = mongodb.MongoClient;
    nareshIt.connect("mongodb://localhost:27017/workshop", (err, db) => {
        db.collection("products").updateOne((cond_obj, update_obj), (err, result) => {
            if (err) {
                res.send({ update: "fail" });
            } else {
                res.send({ update: "success" })
            }
        });
    });
});