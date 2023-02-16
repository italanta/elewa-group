/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-history-carousel',
  templateUrl: './history-carousel.component.html',
  styleUrls: ['./history-carousel.component.scss'],
})
export class HistoryCarouselComponent {
  peoplecount:number = 0;
  
  peoplecountstop:any =setInterval(()=>{
    this.peoplecount++;
    if(this.peoplecount == 733)
    {
      clearInterval(this.peoplecountstop);
    }
  },5)

  careercount:number = 0;
  
  careercountstop:any =setInterval(()=>{
    this.careercount++;
    if(this.careercount == 13)
    {
      clearInterval(this.careercountstop);
    }
  },350)

  projectcount:number = 0;
  
  projectcountstop:any =setInterval(()=>{
    this.projectcount++;
    if(this.projectcount == 200)
    {
      clearInterval(this.projectcountstop);
    }
  },10)

  investorcount:number = 0;
  
  investorcountstop:any =setInterval(()=>{
    this.investorcount++;
    if(this.investorcount == 56)
    {
      clearInterval(this.investorcountstop);
    }
  },5)

}
