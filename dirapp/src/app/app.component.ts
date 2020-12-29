import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
login_details: any = {"uname":"" , "upwd":""};
public login():any{
  console.log(this.login_details);
  if(this.login_details.uname=='nareshit' && this.login_details.upwd=='nareshit'){
    alert("login success");
  }else{
    alert("login fail");
  }
}
}
