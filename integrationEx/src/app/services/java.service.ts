import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http: HttpClient) { }
  public getJavaResponse(): Observable<any> {
    return this.http.get('	http://dummy.restapiexample.com/api/v1/employees');
  }
}
