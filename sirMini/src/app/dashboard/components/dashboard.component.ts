import { Component } from "@angular/core";
import { logoutService } from "../services/logout.service";
import { Router } from "@angular/router";
import errCallBack from "../../config/errCallBack";
@Component({
    selector:"dashboard",
    templateUrl:"./dashboard.component.html"
})
export class dashboardComponent{
    constructor(private router:Router,
                private service:logoutService){}
    logout():any{
        this.service.logout().subscribe((posRes)=>{
            if(posRes.logout == "success"){
                window.localStorage.removeItem("login_details");
                this.router.navigate(["/"]);
            }
        },errCallBack);
    };
};



