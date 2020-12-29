import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    profileData:FormGroup;
    constructor(){
        this.profileData = new FormGroup({
            uname : new FormControl("Naresh",[Validators.required,
                                          Validators.minLength(3),
                                          Validators.maxLength(6)]),
            addr  : new FormGroup({
              address : new FormControl()
            }),
            gender : new FormControl(),
            country : new FormControl()
        });
    }
    register():any{
      console.log(this.profileData.value);
    };
};
