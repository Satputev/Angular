import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'childthree',
  templateUrl: './childthree.component.html',
  styles: []
})
export class ChildthreeComponent implements OnInit {
// tslint:disable-next-line:variable-name
private var_six: string;
  constructor() {
    this.var_six = 'child_three';
  }

  ngOnInit() {
  }

}
