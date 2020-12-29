import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagethree',
  templateUrl: './pagethree.component.html',
  styles: []
})
export class PagethreeComponent implements OnInit {
private var_three: string;
  constructor() {
    this.var_three = 'MongoDB data.....';
   }

  ngOnInit() {
  }

}
