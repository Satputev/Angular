import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { PageoneComponent } from './components/pageone.component';
import { PagetwoComponent } from './components/pagetwo.component';
import { PagethreeComponent } from './components/pagethree.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';
import { ChildoneComponent } from './components/childone.component';
import { ChildtwoComponent } from './components/childtwo.component';
import { ChildthreeComponent } from './components/childthree.component';
// Load routes into Framework by using "RouterModule"
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes) is the function in RouterModule helps to load Routes in framework
    // "appRoutes" is the custom variable contains "Routes"
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
