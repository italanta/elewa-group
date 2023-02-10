import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[elewaGroupNext]'
})
export class NextDirective {

  constructor(private el:ElementRef) {}

  @HostListener('click')
  nextFunction(){
    const elm = this.el.nativeElement.parentElement.parentElement.children[1];
    const team = elm.getElementsByClassName("team");
    elm.append(team[0]);
    console.log(team);
  }

}
