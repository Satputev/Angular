import { Component,Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
export class childComponent{
    @Input() p_id;
    @Input() p_name;
    @Input() p_cost;
    @Output() send:EventEmitter<any> = new EventEmitter();
    clickMe():any{
        this.send.emit(this.p_id+"...."+this.p_name+"...."+this.p_cost)
    };
};