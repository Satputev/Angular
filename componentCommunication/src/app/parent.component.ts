import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parent',
  templateUrl: './parent.component.html'
})
// tslint:disable-next-line:class-name
export class parentComponent {
   products: Array<any> = [
{p_id: 111, p_name: 'p_one', p_cost: 10000},
{p_id: 222, p_name: 'p_two', p_cost: 20000},
{p_id: 333, p_name: 'p_three', p_cost: 10000},
{p_id: 444, p_name: 'p_four', p_cost: 10000},
{p_id: 555, p_name: 'p_five', p_cost: 10000}

  ];
public myFun(data: any) {
  alert(data);
}

}

