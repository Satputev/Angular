import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../services/customers.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styles: []
})
export class CustomersComponent implements OnInit {
private result: any;

// inject the service
  constructor(private service: CustomersService) { }

  ngOnInit() {
    // "subscribe()" is used to cath any response
    this.service.getCustomers().subscribe((posResp) => {
this.result = posResp;
    }, (errResp: HttpErrorResponse) => {
      console.log(errResp);
    });
  }

}
