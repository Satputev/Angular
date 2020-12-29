import { Component} from '@angular/core';
import {LogoutService} from '../services/logout.service';
import {Router} from '@angular/router';//to navigate from one page to another we use router class
import errCallBack from 'src/app/config/errCallBack';

@Component({
selector:'dashboard',
templateUrl:'./dashboard.component.html'
})
export class dashboardComponent{
  constructor(private router:Router,private service:LogoutService){}
  logout():any{
    this.service.logout().subscribe((posRes)=>{
      if(posRes.logout=='success'){
        window.localStorage.removeItem('login_details');
        this.router.navigate(["/"])
      }
    },errCallBack);
  };
};
