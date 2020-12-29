import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materialDemo';
  @ViewChild(MatPaginator, {static: true})
  private paginator: MatPaginator;

  @ViewChild(MatSort, {static: true})
  private sort: MatSort;

  displayedColumns: string [] = ['p_id', 'p_name' , 'p_cost'];

  arr: Array<any> = [
    {p_id: 111, p_name: 'p_one', p_cost: 10000},
    {p_id: 555, p_name: 'p_five', p_cost: 50000},
    {p_id: 222, p_name: 'p_two', p_cost: 20000},
    {p_id: 444, p_name: 'p_four', p_cost: 40000},
    {p_id: 333, p_name: 'p_three', p_cost: 30000},

  ];

  dataSource: MatTableDataSource<any>;

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.arr);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}

