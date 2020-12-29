import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }
  public deleteRecord(data:any):Observable<any>{
    return this.http.delete("http://localhost:8080/delete",data)
  };
};
