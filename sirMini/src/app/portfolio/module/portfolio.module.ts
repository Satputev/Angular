import { NgModule } from "@angular/core";
import { PortfolioComponent } from '../components/portfolio.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TokenModule } from 'src/app/token/token.module';
import { PortfolioService } from '../services/portfolio.service';
import { Routes,RouterModule } from "@angular/router";
export const appRoutes:Routes = [
    {path:"",component:PortfolioComponent}
];
@NgModule({
    declarations:[PortfolioComponent],
    imports:[CommonModule,
             HttpClientModule,
             TokenModule,
             RouterModule.forChild(appRoutes)],
    providers:[PortfolioService],
    exports:[PortfolioComponent]
})
export class PortfolioModule{}