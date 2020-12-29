import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})

// "providedIn" property used to make the services as global
//  "providedIn"  property introduced in angular 5
// any one can inject the service

export class DBService {
  public getProducts(): string {
return 'Products soon...';
  }
  public getReports(): string {
return 'Reports soon';
  }
}
