import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'childone',
  templateUrl: './childone.component.html',
  styles: []
})
export class ChildoneComponent implements OnInit {
private var_four: string;
  constructor(private route: ActivatedRoute) {
    this.var_four = this.route.snapshot.params.p_id + '...' +
    this.route.snapshot.params.p_name + '...' +
    this.route.snapshot.params.p_cost ;

  }

  ngOnInit() {
  }

}
