import { Component, OnInit } from '@angular/core';
import {JavaService} from '../services/java.service';
import {DotnetService} from '../services/dotnet.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs-compat';
@Component({
  selector: 'parallel',
  templateUrl: './parallel.component.html',
  styles: []
})
export class ParallelComponent implements OnInit {
private java_res: any;
private dotnet_res: any;
  constructor(private java: JavaService , private dotnet: DotnetService) { }

  ngOnInit() {
    Observable.forkJoin([
      this.java.getJavaResponse(),
      this.dotnet.getDotnetResponse()
    ]).subscribe((posRes) => {
      this.java_res = posRes[0];
      this.dotnet_res = posRes[1];
    },(errRes: HttpErrorResponse) => {
      if (errRes.error instanceof Error) {
        console.log('client side Errors');
      } else {
console.log('server side Errors');
      }
    } );
  }

}
