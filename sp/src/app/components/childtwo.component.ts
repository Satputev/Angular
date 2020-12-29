import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childtwo',
  templateUrl: './childtwo.component.html',
  styles: []
})
export class ChildtwoComponent implements OnInit {
private var_five : string;
  constructor() {
    this.var_five = 'child_two';
   }

  ngOnInit() {
  }

}
