import { Injectable } from '@angular/core';
// "HttpClient" used to make rest api calls
import {HttpClient} from '@angular/common/http';
// "Observable" is used to make ajax call
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient ) { }
  public getCustomers(): Observable<any> {
     return this.http.get('https://www.w3schools.com/angular/customers.php');
  }
}
