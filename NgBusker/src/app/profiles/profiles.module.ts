import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuskerComponent } from './busker/busker.component';
import { ViewerComponent } from './viewer/viewer.component';



@NgModule({
  declarations: [
    BuskerComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfilesModule { }
