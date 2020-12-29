import {Component} from '@angular/core';
import { PortfolioService} from '../services/portfolio.service';
import errCallBack from 'src/app/config/errCallBack';

@Component({
  selector:'portfolio',
  templateUrl:'./portfolio.component.html'
})
export class PortfolioComponent{
  private result:any;
  constructor(private service:PortfolioService){}
  ngOnInit(){
    this.service.getData().subscribe((posRes)=>{
console.log(posRes);
      this.result=posRes;
    },errCallBack)
  };
};
