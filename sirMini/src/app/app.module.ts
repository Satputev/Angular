import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginModule } from './login/module/login.module';

import { DashboardModule } from './dashboard/module/dashboard.module';

import { Routes,RouterModule } from "@angular/router";

export const appRoutes:Routes = [
    {path:"",loadChildren:"./login/module/login.module#LoginModule"},
    {path:"dashboard",
    loadChildren:"./dashboard/module/dashboard.module#DashboardModule"}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,LoginModule,DashboardModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }