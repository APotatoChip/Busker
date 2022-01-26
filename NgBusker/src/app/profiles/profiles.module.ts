import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuskerComponent } from './busker/busker.component';
import { ViewerComponent } from './viewer/viewer.component';
import { BuskerViewerComponent } from './busker-viewer/busker-viewer.component';
import { ViewerViewerComponent } from './viewer-viewer/viewer-viewer.component';



@NgModule({
  declarations: [
    BuskerComponent,
    ViewerComponent,
    BuskerViewerComponent,
    ViewerViewerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    BuskerComponent
  ]
})
export class ProfilesModule { }
