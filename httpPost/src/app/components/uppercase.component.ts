import { Component, OnInit } from '@angular/core';
import {UppercaseService} from '../services/uppercase.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'uppercase',
  templateUrl: './uppercase.component.html',
  styles: []
})
export class UppercaseComponent implements OnInit {
private result: any;
  constructor(private service: UppercaseService) { }

  ngOnInit() {
  }
public clickMe(data: any) {
this.service.convertToUppercase(data).subscribe((posRes) => {
  this.result = posRes;
}, (errRes: HttpErrorResponse) => {
if (errRes.error instanceof Error) {
  console.log('client side error');
} else {
  console.log('server side error');
}
});
}
}
