import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendancePelPage } from './attendance-pel';

@NgModule({
  declarations: [
    AttendancePelPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendancePelPage),
  ],
})
export class AttendancePelPageModule {}
