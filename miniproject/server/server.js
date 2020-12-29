let express = require("express");
let bodyparser = require("body-parser");
let cors = require("cors");

let app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/login", require("./login/login"));
app.use("/about", require("./about/about"));
app.use("/contact", require("./contact/contact"));
app.use("/portfolio", require("./portfolio/portfolio"));
app.use("/logout", require("./logout/logout"));
app.listen(8090);
console.log("server is listening port no:8090");
