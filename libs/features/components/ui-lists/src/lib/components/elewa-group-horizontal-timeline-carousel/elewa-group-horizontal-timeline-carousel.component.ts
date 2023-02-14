import { Component, ElementRef,AfterViewInit } from '@angular/core';

@Component({
  selector: 'elewa-group-horizontal-timeline-carousel',
  templateUrl: './elewa-group-horizontal-timeline-carousel.component.html',
  styleUrls: ['./elewa-group-horizontal-timeline-carousel.component.scss'],
})
export class HorizontalTimelineCarouselComponent {

  public disabledClass = 'disabled';

public years: any[] = [];
public arrowPrev: any;
public arrowNext: any;
public firstItem: any;
public lastItem: any;
public timeline: any;
public xScrolling = 520;

constructor(private nativeElement: ElementRef) {
  this.loadYears();
}

ngAfterViewInit() {
  const elH: NodeListOf<HTMLDivElement> =
      document.querySelectorAll('.timeline li > div'),
    arrows: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
      '.arrows .arrow'
    );

  this.timeline = document.querySelector('.timeline ol');
  this.firstItem = document.querySelector('.timeline li:first-child');
  this.lastItem = document.querySelector('.timeline li:last-child');
  this.arrowPrev = document.querySelector('.arrows .arrow__prev');
  this.arrowNext = document.querySelector('.arrows .arrow__next');

  console.log(`Line: 43`, this.firstItem, this.lastItem);
  const init = () => {
    // this.setEqualHeights(elH);
    this.animateTl(this.xScrolling, arrows, this.timeline);
    // setSwipeFn(timeline, arrowPrev, arrowNext);
    this.setKeyboardFn(this.arrowPrev, this.arrowNext);
  };

  window.addEventListener('load', init);
}

public loadYears() {
  const loremIpsumDummyText = `
  Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula 
  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
  , nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
  pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla 
  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
  venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer 
  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate 
  eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, 
  enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
  viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam 
  ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. 
  Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
  libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, 
  luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus
  . Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit 
  amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet 
  nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, 
  augue velit cursus nunc, 
  `;
  this.years = [
    {
      year: '2015',
      title: 'Lorem Ipsum',
      description: loremIpsumDummyText,
    },
    {
      year: '2018',
      title: 'Lorem Ipsum',
      description: loremIpsumDummyText,
    },
    {
      year: '2021',
      title: 'Lorem Ipsum',
      description: loremIpsumDummyText,
    },
    {
      year: '2023',
      title: 'Lorem Ipsum',
      description: loremIpsumDummyText,
    },
    {
      year: '2026',
      title: 'Lorem Ipsum',
      description: loremIpsumDummyText,
    },

  ];
}

// SET EQUAL HEIGHTS
public setEqualHeights(el: NodeListOf<HTMLDivElement>) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;
    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }
  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}

// CHECK IF AN ELEMENT IS IN VIEWPORT
public isElementInViewport(el: HTMLElement, position: string) {
  const rect = el.getBoundingClientRect();
  if(position == 'first'){
    return (
      rect.top >= 0 &&
      rect.left + 50 >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  return (
    rect.top >= 0 &&
    rect.left + 50 >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// SET STATE OF PREV/NEXT ARROWS
public setBtnState(el: HTMLButtonElement, flag = true) {
  if (flag) {
    el.classList.add(this.disabledClass);
  } else {
    if (el.classList.contains(this.disabledClass)) {
      el.classList.remove(this.disabledClass);
    }
    el.disabled = false;
  }
}

// ANIMATE TIMELINE
public animateTl(
  scrolling: number,
  el: NodeListOf<HTMLButtonElement>,
  tl: HTMLOListElement
) {
  let counter = 0;
  console.log(`Line: 144`, el);
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener('click', () => {
      if (!this.arrowPrev.disabled) {
        this.arrowPrev.disabled = true;
      }
      if (!this.arrowNext?.disabled) {
        this.arrowNext.disabled = true;
      }
      const sign = el[i].classList.contains('arrow__prev') ? '' : '-';
      console.log(`Line: 155`, sign);
      if (counter === 0) {
        tl.style.transform = `translateX(-${scrolling}px)`;
      } else {
        const tlStyle = getComputedStyle(tl);
        // add more browser prefixes if needed here
        const tlTransform =
          tlStyle.getPropertyValue('-webkit-transform') ||
          tlStyle.getPropertyValue('transform');
        const values =
          parseInt(tlTransform.split(',')[4]) +
          parseInt(`${sign}${scrolling}`);
        tl.style.transform = `translateX(${values}px)`;
      }
      setTimeout(() => {
        this.isElementInViewport(this.firstItem, 'first')
          ? this.setBtnState(this.arrowPrev)
          : this.setBtnState(this.arrowPrev, false);

        this.isElementInViewport(this.lastItem, 'last')
          ? this.setBtnState(this.arrowNext)
          : this.setBtnState(this.arrowNext, false);
      }, 100);
      counter++;
    });
  }
}

// ADD BASIC KEYBOARD FUNCTIONALITY
public setKeyboardFn(prev: HTMLButtonElement, next: HTMLButtonElement) {
  document.addEventListener('keydown', (e) => {
    if (e.which === 37 || e.which === 39) {
      const timelineOfTop = this.timeline.offsetTop;
      const y = window.pageYOffset;
      if (timelineOfTop !== y) {
        window.scrollTo(0, timelineOfTop);
      }
      if (e.which === 37) {
        prev.click();
      } else if (e.which === 39) {
        next.click();
      }
    }
  });
}
}