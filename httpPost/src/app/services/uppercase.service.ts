import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UppercaseService {

  constructor(private http: HttpClient) { }
  public convertToUppercase(data: any): Observable<any> {
    return this.http.post('http://test-routes.herokuapp.com/test/uppercase', data);
  }
}
