import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule, HttpClientModule // HttpClientModule is used to make ajax call
  ],
  providers: [],
  bootstrap: [CustomersComponent]
})
export class AppModule { }
