import { Component, OnInit } from '@angular/core';
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
  headerClass = 'header-dark';

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
        // Log the current page URL for debugging purposes
        console.log('Current page: ', currentPage);
        // Determine if the current page should use a light header
        this.isLightHeader = this.getIsLightHeader(currentPage);
        // Log whether the header is light or dark for debugging purposes
        console.log('Is light header: ', this.isLightHeader);
        // Set the header class based on whether it's light or dark
        this.headerClass = this.isLightHeader ? 'header-light' : 'header-dark';
        // Log the header class for debugging purposes
        console.log('Header class: ', this.headerClass);
      });
  }

  private getIsLightHeader(page: string): boolean {
    // Define an array of pages that should use a light header
    const lightHeaderPages = [
      '/home/en',
      '/about/en',
      '/social-impact/en',
      '/invest/en',
      '/venture-labs/en',
      '/brands/en',
      '/careers/en',
      '/news/en',
      '/contact/en',
    ];
    // Log the array of light header pages for debugging purposes
    console.log('Light header pages: ', lightHeaderPages);
    // Determine whether the current page is in the array of light header pages
    return lightHeaderPages.includes(page);
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

      // Update header class
    };

    hamburger?.addEventListener('click', mobileMenu);
    navLink.forEach((l) => l.addEventListener('click', closeMenu));
  }
}
