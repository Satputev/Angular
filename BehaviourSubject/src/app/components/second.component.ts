import { Component } from "@angular/core";
import { testService } from "../services/testService.service";
@Component({
  selector: "second",
  templateUrl: "./second.component.html"
})
export class SecondComponent {
  result: string;
  constructor(private service: testService) {}
  ngOnInit() {
    this.service.cast.subscribe(posRes => {
      this.result = posRes;
    });
  }
}
