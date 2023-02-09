import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './mission/mission.component';
import { CardsModule } from '@elewa-group/features/components/cards';

@NgModule({
  imports: [CommonModule,CardsModule],
  declarations: [MissionComponent],
  exports: [MissionComponent]

})
export class AboutUsModule {}
