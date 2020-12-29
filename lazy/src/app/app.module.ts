import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CountriesModule} from './countries.module'
import { AppComponent } from './app.component';
import { PageoneComponent } from './pageone.component';
import { IndexComponent } from './index.component';
import { lazyRoutes } from './app.routes';
import { authGuards } from './auth.guards';

@NgModule({
  declarations: [
    AppComponent,PageoneComponent,IndexComponent
  ],
  imports: [
    BrowserModule,lazyRoutes
  ],
  providers: [authGuards],
  bootstrap: [IndexComponent]
})
export class AppModule { }
