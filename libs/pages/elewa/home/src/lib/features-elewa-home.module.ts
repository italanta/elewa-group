import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { HomeActivityComponent } from './components/home-activity/home-activity.component';
import { CardsModule } from '@elewa-group/features/components/cards';

@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [
    HomePageComponent,
    HomeHeroSectionComponent,
    HomeActivityComponent,

  ],
  exports: [HomePageComponent, HomeHeroSectionComponent, HomeActivityComponent],
})
export class HomePageModule {
  @Input() subtitle = 'Education';
  @Input() title = 'Elewa';
  @Input() imgSrc = 'https://cdn-icons-png.flaticon.com/512/525/525999.png?w=740&t=st=1675501297~exp=1675501897~hmac=1155bac819e804d6cec3f35352bfdf66b30145c40de715340157d1f63bcfc939';
  @Input()  description = 'A key player in the development of operations of new-age human-center digital learning experiences';
}
