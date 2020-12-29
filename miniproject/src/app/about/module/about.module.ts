import {NgModule} from'@angular/core';
import { AboutComponent } from '../components/about.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TokenModule } from 'src/app/token/token.module';
import { RouterModule,Routes } from '@angular/router';
import { AboutService } from '../services/about.service';

export const appRoutes:Routes=[{path:"",component:AboutComponent}]

@NgModule({
  declarations:[AboutComponent],
  imports:[CommonModule,HttpClientModule,TokenModule,RouterModule.forChild(appRoutes)],
  providers:[AboutService],
  exports:[AboutComponent]
})
export class AboutModule{}
