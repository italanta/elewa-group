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
    if (team.length > 3 || window.innerWidth < 768) {
      elm.prepend(team[team.length - 1]);
    }
  }
}


