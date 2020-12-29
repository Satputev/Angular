import { Component } from "@angular/core";
import { AboutService } from '../services/about.service';
import errCallBack from 'src/app/config/errCallBack';
@Component({
    selector:"about",
    templateUrl:"./about.component.html"
})
export class AboutComponent{
    private result:any;
    constructor(private service:AboutService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result = posRes;
        },errCallBack);
    }
};