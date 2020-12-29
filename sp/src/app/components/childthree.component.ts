import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'childthree',
  templateUrl: './childthree.component.html',
  styles: []
})
export class ChildthreeComponent implements OnInit {
private var_six : string;
  constructor() {
    this.var_six = 'child_three'
   }

  ngOnInit() {
  }

}
