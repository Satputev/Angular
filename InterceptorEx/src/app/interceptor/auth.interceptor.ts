import {Injectable} from '@angular/core';

import {HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class authInterceptor{
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable <HttpEvent<any>>{
const req1 = req.clone({
  setHeaders: {
    token: 'nareshIt'
  }
});
return handler.handle(req1)
  }
}
