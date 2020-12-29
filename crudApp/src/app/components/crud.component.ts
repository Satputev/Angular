import { Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { InsertService } from '../services/insert.service';
import { UpdateService } from '../services/update.service';
import { DeleteService } from '../services/delete.service';

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styles: []
})
export class CrudComponent implements OnInit {

  constructor(private fetch:FetchService,private insert:InsertService,private update:UpdateService,
    private delete:DeleteService) { }

  ngOnInit() {
  }

}
