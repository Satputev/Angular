import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class testService {
  private data = new BehaviorSubject<string>("Angular9");
  public cast = this.data.asObservable();

  public changeData(arg1: string) {
    this.data.next(arg1);
  }
}
