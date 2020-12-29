//import the modules
//require() function is used to import the modules

let express = require("express");
let mysql = require("mysql");
let cors = require("cors");
let bodyparser = require("body-parser");

//create the rest app

let app = express();

//enable the cors

app.use(cors());

//set the json as MIME type

app.use(bodyparser.json());

//read the json

app.use(bodyparser.urlencoded({ extended: false }));

//create the connection object

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "angular7am"
});

//connect to database
connection.connect();

//create the get request

app.get("/fetch", (req, res) => {
    connection.query(`select * from products`, (err, records, fields) => {
        if (err) throw err;
        else {
            res.send(records);
        }
    });
});


//create the post request

app.post("/insert", (req, res) => {
    connection.query(`insert into products values (${req.body.p_id},'${req.body.p_name}',${req.body.p_cost})`, (err, result) => {
        if (err) throw err;
        else {
            res.send({ insert: "success" });
        }
    });
});


//create put request

app.put("/update", (req, res) => {
    connection.query(`update products set p_name='${req.body.p_name}',p_cost=${req.body.p_cost} where p_id=${req.body.p_id}`, (err, result) => {
        if (err) throw err;
        else {
            res.send({ update: "success" });
        }
    });
});


//delete request

app.delete("/delete", (req, res) => {
    connection.query(`delete from products where p_id='${req.body.p_id}'`, (req, res) => {
        if (err) throw err;
        else {
            res.send({ delete: "success" });
        }
    });
});


//assign the port no

app.listen(8285);
console.log("server is listening the port no 8285")