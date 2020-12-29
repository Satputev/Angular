import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import errCallBack from 'src/app/config/errCallBack';
import {Router} from '@angular/router';

@Component({
  selector:'login',
  templateUrl:'./login.component.html'
})
export class LoginComponent{
  constructor(private service:LoginService,private router:Router){}
public login(data:any){
  this.service.login(data).subscribe((posRes)=>{

if(posRes.login=='success'){
  console.log(posRes);
  let str=JSON.stringify(posRes);
  window.localStorage.setItem('login_details',str);

  this.router.navigate(['/dashboard'])
}else{
  alert("login fail");
}
  },errCallBack)
}
};
