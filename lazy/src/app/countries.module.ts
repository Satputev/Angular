import {NgModule} from '@angular/core';
import {CountriesComponent} from './countries.component';
import {CountriesService} from './countries.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
export const appRoutes: Routes = [
  {path: '',
component: CountriesComponent}
] ;

@NgModule({
declarations: [CountriesComponent],
imports: [HttpClientModule,
CommonModule,RouterModule.forChild(appRoutes)],
providers: [CountriesService],
exports:[CountriesComponent]
})
export class CountriesModule{}

