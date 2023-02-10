import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[elewaGroupPrev]'
})
export class PrevDirective {

  constructor(private el:ElementRef) {}

  @HostListener('click')
  nextFunction(){
    const elm = this.el.nativeElement.parentElement.parentElement.children[1];
    const team = elm.getElementsByClassName("team");
    elm.prepend(team[team.length - 1]);
    console.log(team);
  }

}


