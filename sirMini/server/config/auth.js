//import token.js file
//it containes server side token
let obj = require("./token");
//create the function
let auth = (req,res,next)=>{
    //read headers
    let allHeaders = req.headers;
    let c_token = allHeaders.token;
    //compare the tokens
    if(c_token === obj.token){
        next();
    }else{
        res.send({'message':'unauthorized user'});
    }
};
module.exports = auth;