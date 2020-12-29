import {NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import {FetchTokenService} from './gettoken.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {authInterceptor} from './auth.interceptor';
@NgModule({
imports:[CommonModule],
providers:[FetchTokenService,{
provide:HTTP_INTERCEPTORS,
useClass:authInterceptor,
multi:true
}]
})
export class TokenModule{}
