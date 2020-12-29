import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PredefinedPipesDemo';

   var_one: string = 'hello';
   var_two:string="HELLO";
   var_three:string="naresh it";
   var_four:number=100;

   var_five:any={
     p_id: 111,
     p_name: 'p_one',
     p_cost: 10000
   }
   var_six:Array<number>=[10,20,30,40,50,60];

   var_seven:number=100.12345
   var_eight:number=0.95;

   var_nine:Date=new Date();
var_ten:any;
constructor(){
  this.var_ten=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("success");

    },5000);
  });
}

}
