import { Component, OnInit } from '@angular/core';
import {JavaService} from '../services/java.service';
import {DotnetService} from '../services/dotnet.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {
private java_res: any;
private dotnet_res: any;
  constructor(private java: JavaService , private dotnet: DotnetService) { }
public errCallBack = (errRes: HttpErrorResponse) => {
if (errRes.error instanceof Error) {
  console.log('Clients sides errors');
} else {
console.log('Server side error');
}
}
  ngOnInit() {
    this.java.getJavaResponse().subscribe((posRes) => {
      this.java_res = posRes;
      this.dotnet.getDotnetResponse().subscribe(( posRes ) => {
this.dotnet_res = posRes;
      }, this.errCallBack);
    }, this.errCallBack );
  }

}
