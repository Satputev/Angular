import {Component} from '@angular/core';
@Component({
  selector:'second',
  templateUrl:'./second.component.html'
})

export class secondComponent{
  public var_one:string;
  public var_two:string;
  constructor(){
    this.var_one='hello1';
    this.var_two='hello2';
  }
}
