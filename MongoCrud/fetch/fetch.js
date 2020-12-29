let express = require("Express");
let mongodb = require("mongodb");

module.exports = require("express").Router().get("/", (req, res) => {
    let mongodb = require("mongodb");
    let nareshIT = mongodb.MongoClient;
    nareshIT.connect("mongodb://localhost:27017/workshop", (err, db) => {
        if (err) {
            console.log("Error");
        } else {
            res.send(Array);
        }
    })
})