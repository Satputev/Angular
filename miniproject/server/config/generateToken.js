//converting readable data to unreadable data with custom password is called token

let jwt = require("jwt-simple");

let genToken = (data, password) => {
    return jwt.encode(data, password);
};
module.exports = genToken;