/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-elewa-horizontal-timeline-carousel',
  templateUrl: './elewa-horizontal-timeline-carousel.component.html',
  styleUrls: ['./elewa-horizontal-timeline-carousel.component.scss'],
})

export class ElewaHorizontalTimelineCarouselComponent implements OnInit {

  @Input() currentIndex: number = 0;

  @Input() items = [
    {
      date: "2013",
      title: "Lorem Ipsum",
      description: "Ipsum ea nulla mollit ad anim esse ad. Proident eiusmod fugiat sit pariatur consectetur sint aute dolore anim tempor pariatur proident eiusmod excepteur. Laboris eu pariatur dolor in ullamco pariatur quis do esse. In ex minim eu quis incididunt minim non non id sunt aliquip. Quis dolore ea ullamco duis qui consequat qui elit elit."
    },
    {
      date: "2015",
      title: "Lorem Ipsum",
      description: "Ipsum ea nulla mollit ad anim esse ad. Proident eiusmod fugiat sit pariatur consectetur sint aute dolore anim tempor pariatur proident eiusmod excepteur. Laboris eu pariatur dolor in ullamco pariatur quis do esse. In ex minim eu quis incididunt minim non non id sunt aliquip. Quis dolore ea ullamco duis qui consequat qui elit elit."
    },
    {
      date: "2017",
      title: "Lorem Ipsum",
      description: "Esse et occaecat laboris adipisicing proident pariatur dolore aliqua commodo ex consequat aliqua. Pariatur ipsum excepteur sint veniam veniam incididunt minim aliquip elit eiusmod consequat sint mollit sunt. Dolore nostrud sint fugiat duis mollit ipsum dolore adipisicing ullamco dolore occaecat ut qui do. Magna voluptate elit."
    },
    {
      date: "2020",
      title: "Lorem Ipsum",
      description: "Ipsum ea nulla mollit ad anim esse ad. Proident eiusmod fugiat sit pariatur consectetur sint aute dolore anim tempor pariatur proident eiusmod excepteur. Laboris eu pariatur dolor in ullamco pariatur quis do esse. In ex minim eu quis incididunt minim non non id sunt aliquip. Quis dolore ea ullamco duis qui consequat qui elit elit."
    },
    {
      date: "2022",
      title: "Lorem Ipsum",
      description: "Ipsum ea nulla mollit ad anim esse ad. Proident eiusmod fugiat sit pariatur consectetur sint aute dolore anim tempor pariatur proident eiusmod excepteur. Laboris eu pariatur dolor in ullamco pariatur quis do esse. In ex minim eu quis incididunt minim non non id sunt aliquip. Quis dolore ea ullamco duis qui consequat qui elit elit."
    }
  ];

  constructor() { }

  ngOnInit() {
    this.currentIndex = 0;
  }

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

