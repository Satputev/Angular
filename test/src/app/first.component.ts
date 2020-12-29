// In angular application index.html is the main template
// main template cant understand FirstComponent(TS)
// so we must convert "TS" to equivalent "tag" (custom tag)
// then we will call "Tag "(custom tag) in main template

// import component

// Component is the predefined  class  used to convert the typescript code to equivalent Tag

// tslint:disable-next-line:quotemark
import {Component} from "@angular/core";

// use a Component
// we will use predefined classes by using "@"
// using predefined classes with "@" is called as decorator

@Component({
  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:component-selector
  selector : 'naresh' ,
  templateUrl: './first.component.html'
})

// selection is the json key used to define the  custom html tag
// templateUrl is the json key used to link the external template


export class FirstComponent {
  // tslint:disable-next-line:variable-name
  private sub_one: string;
  // tslint:disable-next-line:variable-name
  private sub_two: string;
  // tslint:disable-next-line:typedef-whitespace
  // tslint:disable-next-line:variable-name
  private sub_three: string;

  constructor() {
    this.sub_one = 'Angular 9';
    this.sub_two = 'NodeJs';
    this.sub_three = 'MongoDb';
  };

  public getSubOne(): string {
    return this.sub_one;
  };

  public getSubTwo(): string {
    return this.sub_two;
  } ;

  public getSubThree(): string {
    return this.sub_three;
  };

};
