import { Component } from "@angular/core";
import { ContactService } from '../services/contact.service';
import errCallBack from 'src/app/config/errCallBack';
@Component({
    selector:"contact",
    templateUrl:"./contact.component.html"
})
export class ContactComponent{
    private result:any;
    constructor(private service:ContactService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result = posRes;
        },errCallBack);
    }
};