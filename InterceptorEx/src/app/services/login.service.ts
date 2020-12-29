import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public authenticate(data:any): Observable<any>{
return this.http.post('http://localhost:6242/login',data);
  }
}
