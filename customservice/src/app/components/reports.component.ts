import {Component} from '@angular/core';
import {DBService} from '../services/db.service';
@Component({
  selector: 'app-report',
  templateUrl: './reports.component.html'
})

export class ReportsComponent {
private result: string;
constructor(private service: DBService) {
}
// tslint:disable-next-line:use-lifecycle-interface
ngOnInit() {
  this.result = this.service.getReports();
}
}
