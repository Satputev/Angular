import { NgModule } from "@angular/core";
import { loginComponent } from '../components/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from "@angular/forms";
import { loginService } from '../services/login.service';
import { Routes,RouterModule } from "@angular/router";
export const appRoutes:Routes = [
    {path:"",component:loginComponent}
];
@NgModule({
    declarations:[loginComponent],
    imports:[CommonModule,
             HttpClientModule,
             FormsModule,
             RouterModule.forChild(appRoutes)],
    providers:[loginService],
    exports:[loginComponent]
})
export class LoginModule{}