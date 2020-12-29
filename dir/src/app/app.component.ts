import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:variable-name
  // login_details: any = {'uname': "" , 'upwd': ""};

count:number=0;
  public login(arg1, arg2): any {
    if (arg1 === "nareshit" && arg2 === "nareshit") {
alert('login success');
    } else {
alert('login fail');
    }
  }

}
