module.exports = require("express").Router().post("/", (req, res) => {
    let obj = {
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_cost: req.body.p_cost
    };
    let mongodb = require("mongodb");
    let nareshIt = mongodb.MongoClient;
    nareshIt.connect("mongodb//localhost:27017/workshop", (err, db) => {
        db.collection("products").insertOne(obj, (err, result) => {
            if (err) {
                res.send({ insert: "fail" })
            } else {
                res.send({ insert: "success" });
            }
        })
    })
})