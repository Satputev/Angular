import { NgModule } from "@angular/core";
import { ContactComponent } from '../components/contact.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TokenModule } from 'src/app/token/token.module';
import { ContactService } from '../services/contact.service';
import { Routes,RouterModule } from "@angular/router";
export const appRoutes:Routes = [
    {path:"",component:ContactComponent}
];
@NgModule({
    declarations:[ContactComponent],
    imports:[CommonModule,
             HttpClientModule,
             TokenModule,
             RouterModule.forChild(appRoutes)],
    providers:[ContactService],
    exports:[ContactComponent]
})
export class ContactModule{}