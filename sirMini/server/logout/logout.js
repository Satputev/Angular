let logout = 
        require("express").Router()
        .get("/",[require("../config/auth")],(req,res)=>{
    require("../config/token").token = "";
    let obj = require("../config/token");
    if(obj.token === ""){
        res.send({logout:"success"});
    }else{
        res.send({logout:"fail"});
    }
});
module.exports = logout;