//converting readable data to unreadable data with custom password called as token.
let jwt = require("jwt-simple");
let genToken = (data,password)=>{
    return jwt.encode(data,password);
};
module.exports = genToken;