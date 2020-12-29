import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveEx';
  // tslint:disable-next-line:no-inferrable-types
  count: number = 0;
  login(arg1, arg2) {
    if (arg1 === 'nareshit' && arg2 === 'nareshit') {
      alert('login success');
    } else {
      alert('login fail');
    }

  }
}
