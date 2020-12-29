import { Injectable } from "@angular/core";
import { FetchTokenService } from './gettoken.service';
import { HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:"root"
})
export class authInterceptor{
    constructor(private service:FetchTokenService){}
    intercept(req:HttpRequest<any>,handler:HttpHandler)
                                :Observable<HttpEvent<any>>{
        if(req.url == "http://localhost:8090/login"){
            return handler.handle(req);
        }else{
            const req1 = req.clone({
                setHeaders:{
                    token:this.service.getToken()
                }
            });
            return handler.handle(req1);
        }
    };
};


