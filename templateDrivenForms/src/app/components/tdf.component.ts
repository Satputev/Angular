import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor() { }
register(data: any): any {
  console.log(data);
}

  ngOnInit(): void {
  }

}
