import { Component } from "@angular/core";
import { loginService } from "../services/login.service";
import errCallBack from "../../config/errCallBack";
import { Router } from "@angular/router";
@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})
export class loginComponent{
    constructor(private service:loginService,
                private router:Router){}
    public login(data:any){
        this.service.login(data).subscribe((posRes)=>{
            if(posRes.login == "success"){
                let str = JSON.stringify(posRes);
                window.localStorage.setItem("login_details",str);
                this.router.navigate(["/dashboard"]);
            }else{
                alert("Login Fail");
            }
        },errCallBack);
    };
};