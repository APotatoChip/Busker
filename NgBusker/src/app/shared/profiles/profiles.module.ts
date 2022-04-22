import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthProfilePageComponent } from './auth-profile-page/auth-profile-page.component';
import { UnauthProfilePageComponent } from './unauth-profile-page/unauth-profile-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditProfileComponent,
    AuthProfilePageComponent,
    UnauthProfilePageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports:[
    AuthProfilePageComponent,
    UnauthProfilePageComponent
  ]
})
export class ProfilesModule { }
