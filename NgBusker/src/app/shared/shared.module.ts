import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserRoutingModule } from '../user/user-routing.module';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesModule } from './profiles/profiles.module';
import { LoaderComponent } from './loader/loader.component';
import { RePasswordValidatorDirective } from './re-password-validator.directive';



@NgModule({
  declarations: [
    ProfilesComponent,
    LoaderComponent,
    RePasswordValidatorDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UserRoutingModule,
    ProfilesModule
  ],
  exports:[
  ProfilesComponent,
  LoaderComponent,
  RePasswordValidatorDirective
  ]
})
export class SharedModule { }
