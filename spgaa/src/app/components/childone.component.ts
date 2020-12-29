import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'childone',
  templateUrl: './childone.component.html',
  styles: []
})
export class ChildoneComponent implements OnInit {
// tslint:disable-next-line:variable-name
private var_four: string;
  constructor(private route: ActivatedRoute) {
    // tslint:disable-next-line:no-string-literal
    this.var_four = this.route.snapshot.params['p_id'] + '.....' +
    // tslint:disable-next-line:no-string-literal
    this.route.snapshot.params['p_name'] + '.....' +
// tslint:disable-next-line:no-string-literal
this.route.snapshot.params['p_cost'] ;
  }

  ngOnInit() {
  }

}
