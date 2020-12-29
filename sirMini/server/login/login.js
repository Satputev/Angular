//it is used to create and export the module


//import mssql module
let mssql = require("mssql");
let login = require("express").Router()
                            .post("/",(req,res)=>{
    mssql.connect(require("../config/db_properties"),(err)=>{
        if(err) throw err;
        else{
            let queryObj = new mssql.Request();
            queryObj.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,
                                                    (err,records)=>{
                if(err) throw err;
                else{
                    if(records.recordset.length>0){
                        let token = require("../config/generateToken")({'uname':req.body.uname,
                                         'upwd':req.body.upwd},"hr@tcs.com");
                        require("../config/token").token = token;
                        res.send({'login':'success','token':token});
                    }else{
                        res.send({'login':'fail'});
                    }
                }
                mssql.close();
            });
        }
    });
});
module.exports = login;









