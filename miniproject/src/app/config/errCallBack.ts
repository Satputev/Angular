import {HttpErrorResponse} from '@angular/common/http';

let errCallBack=(err:HttpErrorResponse):any=>{
  if(err.error instanceof Error){
    console.log("Client side error");
  }else{
    console.log(err);
  }
};
export default errCallBack;

