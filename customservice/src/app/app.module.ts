import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products.component';
import { ReportsComponent } from './components/reports.component';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, ReportsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ReportsComponent]
})
export class AppModule { }
