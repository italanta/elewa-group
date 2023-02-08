import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { HomePageComponent} from './pages/home-page/home-page.component';

=======
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
>>>>>>> 90e7e71b8e7744007953261eebb191be45231053


@NgModule({
  imports: [CommonModule],

  declarations: [HomePageComponent ],
  exports: [HomePageComponent],

  declarations: [HomePageComponent, HomeHeroSectionComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent],
})
export class HomePageModule {}
