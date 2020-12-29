import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MysqlComponent } from './mysql.component';
import { SQLServerDBComponent } from './mssql.component';
import { MongoDBComponent } from './mongodb.component';

@NgModule({
  declarations: [
    AppComponent, MysqlComponent, SQLServerDBComponent, MongoDBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MongoDBComponent]
})
export class AppModule { }
