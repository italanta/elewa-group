import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[elewaGroupPrev]'
})
export class PrevDirective {

  constructor(private el:ElementRef) {}

  @HostListener('click')
  nextFunction(){
    const elm = this.el.nativeElement.parentElement.parentElement.children[1];
    const carousel = elm.getElementsByClassName("carousel");
    elm.prepend(carousel[carousel.length - 1]);
    console.log(carousel);
  }
}