let mssql = require("mssql");

let about = require("express").Router().get("/", [require("../config/auth")], (req, res) => {
    mssql.connect(require("../config/db_properties"), (err) => {
        if (err) throw err;
        else {
            let queryObj = new mssql.Request()
            queryObj.query(`select * from about`, (err, records) => {
                if (err) throw err;
                else {
                    res.send(records);
                }
                mssql.close();
            });

        }
    });
});
module.exports = about;
