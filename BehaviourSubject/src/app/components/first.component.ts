import { Component } from "@angular/core";
import { testService } from "../services/testService.service";
@Component({
  selector: "first",
  templateUrl: "./first.component.html"
})
export class FirstComponent {
  result: string;
  constructor(private service: testService) {}
  ngOnInit() {
    this.service.cast.subscribe(posRes => {
      this.result = posRes;
    });
  }
  clickMe(arg1) {
    this.service.changeData(arg1);
  }
}
