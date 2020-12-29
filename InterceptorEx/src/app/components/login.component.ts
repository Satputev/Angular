import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
private result:any;
  constructor(private service:LoginService) { }

  ngOnInit() {
  }
public login(data:any):any{
  this.service.authenticate(data).subscribe((posRes) => {
    this.result=posRes;
  },(errRes:HttpErrorResponse)=>{
    if(errRes.error instanceof Error){
      console.log("client side error");
    }else{
      console.log("server side error");
    }
  });
}
}
