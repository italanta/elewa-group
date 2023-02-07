import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './mission/mission.component';
import { WeCareComponent } from './we-care/we-care.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MissionComponent, WeCareComponent],
})
export class AboutUsModule {}
