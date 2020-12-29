import { NgModule } from "@angular/core";
import { dashboardComponent } from '../components/dashboard.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TokenModule } from 'src/app/token/token.module';
import { logoutService } from '../services/logout.service';
import { Routes,RouterModule } from "@angular/router";

export const appRoutes:Routes = [
    {path:"",component:dashboardComponent,
     children:[{path:"about",loadChildren:"src/app/about/module/about.module#AboutModule"},
               {path:"portfolio",loadChildren:"src/app/portfolio/module/portfolio.module#PortfolioModule"},
               {path:"contact",loadChildren:"src/app/contact/module/contact.module#ContactModule"}]}
];

@NgModule({
    declarations:[dashboardComponent],
    imports:[CommonModule,
             HttpClientModule,
             TokenModule,
             RouterModule.forChild(appRoutes)],
    providers:[logoutService],
    exports:[dashboardComponent]
})
export class DashboardModule{}