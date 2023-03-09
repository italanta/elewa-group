import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'elewa-group-button-plain',
  templateUrl: './button-plain.component.html',
  styleUrls: ['./button-plain.component.scss'],
})
export class ButtonPlainComponent {
  @Input() innerText:string
  @Output() queryString:EventEmitter<string>
  constructor(){
    this.innerText = "Click Me";
    this.queryString = new EventEmitter();
  }
  clickHandler():void{
    this.queryString.emit(this.innerText)
  }
}
