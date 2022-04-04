import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuskerComponent } from './busker/busker.component';
import { BuskerViewerComponent } from './busker-viewer/busker-viewer.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ViewerViewerComponent } from './viewer-viewer/viewer-viewer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    BuskerComponent,
    BuskerViewerComponent,
    ViewerComponent,
    ViewerViewerComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    BuskerComponent,
    BuskerViewerComponent,
    ViewerComponent,
    ViewerViewerComponent
  ]
})
export class ProfilesModule { }
