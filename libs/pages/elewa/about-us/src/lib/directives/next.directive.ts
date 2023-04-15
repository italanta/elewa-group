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
    if (team.length > 3 || window.innerWidth < 768) {
      elm.append(team[0]);
    }
  }
}
