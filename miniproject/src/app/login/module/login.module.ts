import { NgModule } from "@angular/core";
import { LoginComponent } from '../component/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import{RouterModule,Routes} from '@angular/router';
export const appRoutes:Routes=[{path:'',component:LoginComponent}];
import {FormsModule} from '@angular/forms';
import { LoginService } from '../services/login.service';

@NgModule({
  declarations:[LoginComponent],
  imports:[CommonModule,HttpClientModule,FormsModule,RouterModule.forChild(appRoutes)],
providers:[LoginService],
exports:[LoginComponent]
})
export class LoginModule{}
