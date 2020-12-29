import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'childtwo',
  templateUrl: './childtwo.component.html',
  styles: []
})
export class ChildtwoComponent implements OnInit {
// tslint:disable-next-line:variable-name
private var_five: string;
  constructor() {
    this.var_five = 'Child_two';
   }

  ngOnInit() {
  }

}
