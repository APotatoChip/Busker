import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthProfilePageComponent } from './auth-profile-page/auth-profile-page.component';
import { UnauthProfilePageComponent } from './unauth-profile-page/unauth-profile-page.component';
import { FormsModule } from '@angular/forms';
import { CurrentUserComponent } from './current-user/current-user.component';
import { ProfilesComponent } from './profiles.component';



@NgModule({
  declarations: [
    AuthProfilePageComponent,
    UnauthProfilePageComponent,
    CurrentUserComponent,
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule, 
  ],
  exports:[
    AuthProfilePageComponent,
    UnauthProfilePageComponent,
    CurrentUserComponent,
    ProfilesComponent
  ]
})
export class ProfilesModule { }
