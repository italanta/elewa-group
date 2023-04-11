import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'elewa-group-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // Set initial values for the component's properties
  isLightHeader = false;
  headerClass = 'header-light';

  navbarfixed:boolean = false;

  constructor(private router: Router) {
    // Subscribe to router events and filter for NavigationEnd events only
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        const currentPage = event.urlAfterRedirects;
        // Determine if the current page should use a light header
        this.isLightHeader = this.getIsLightHeader(currentPage);
        // Set the header class based on whether it's light or dark
        this.headerClass = this.isLightHeader ? 'header-light' : 'header-dark';
      });
  }

  ngOnInit() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menus');
    const navLink = document.querySelectorAll('.nav-links');

    const mobileMenu = () => {
      hamburger?.classList.toggle('active');
      navMenu?.classList.toggle('active');
    };

    const closeMenu = () => {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');

    };
    hamburger?.addEventListener('click', mobileMenu);
    navLink.forEach((l) => l.addEventListener('click', closeMenu));

  }

  private getIsLightHeader(page: string): boolean {
    // Define an array of pages that should use a light header
    const lightHeaderPages = [
      '/',
      '/home',
      '/about',
      '/social-impact',
      '/invest',
      '/brands',
      '/venture-labs',
      '/contact',
    ];

    // Determine whether the current page is in the array of light header pages
    return lightHeaderPages.includes(page);
  }


  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }
}
