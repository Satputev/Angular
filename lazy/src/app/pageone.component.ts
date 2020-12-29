import {Component} from '@angular/core';
@Component({
  selector: 'page_one',
  templateUrl: './pageone.component.html'
})
export class PageoneComponent {
  private var_one: string;
  constructor() {
    this.var_one = 'Page_one!!!!';
  }
}
