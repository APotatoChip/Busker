import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserRoutingModule } from '../user/user-routing.module';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesModule } from './profiles/profiles.module';



@NgModule({
  declarations: [
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UserRoutingModule,
    ProfilesModule
  ],
  exports:[
  ProfilesComponent
  ]
})
export class SharedModule { }
