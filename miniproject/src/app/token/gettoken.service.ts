//this module is used to fetch the token from local storage

import {Injectable} from '@angular/core';
@Injectable({
  providedIn:"root"
})

export class FetchTokenService{
   public getToken():string{
    let str=window.localStorage.getItem("login_details");
    let obj=JSON.parse(str);
    return obj.token;
  };
};
