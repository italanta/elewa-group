import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
 selector: 'elewa-group-elewa-group-main-page',
 templateUrl: './elewa-group-main-page.component.html',
 styleUrls: ['./elewa-group-main-page.component.scss'],
})
export class ElewaGroupMainPageComponent implements OnInit{
 currentPage: string;


 constructor(private route: ActivatedRoute) {}


 ngOnInit() {
   this.route.url.subscribe(urlSegments => {
           // Update currentPage based on current route
           this.currentPage = urlSegments[0].path;
   }) 
 }
}

