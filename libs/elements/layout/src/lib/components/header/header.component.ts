import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

    ngOnInit() {

      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menus");
      const navLink = document.querySelectorAll(".nav-links");
    
      const mobileMenu = () => {
        hamburger?.classList.toggle("active")
        navMenu?.classList.toggle("active")
      }
    
      const closeMenu = () => {
        hamburger?.classList.remove("active")
        navMenu?.classList.remove("active")
      }
    
      hamburger?.addEventListener("click" , mobileMenu)
      navLink.forEach((l) => l.addEventListener("click",closeMenu))
    }
}
