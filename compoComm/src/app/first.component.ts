import {Component, ViewChild, QueryList, ViewChildren} from '@angular/core';
import { secondComponent } from './second.component';

@Component({
  selector:'first',
  templateUrl:'./first.component.html'
})

export class firstComponent {
 /*
  @ViewChild(secondComponent, {static: true})
  private second: secondComponent;

  clickMe(){
    this.second.var_one = 'welcome1';
    this.second.var_two = 'welcome2';
  }
  */

  @ViewChildren(secondComponent)
  private obj:QueryList<secondComponent>=new QueryList()
  private arr:Array<any>=[];
  ngAfterViewInit(){
    this.arr=this.obj.toArray();
  }
clickMe(){
  this.arr.forEach((element,index)=>{
    element.var_one='welcome1';
    element.var_two='welcome2';
  });
}
}
