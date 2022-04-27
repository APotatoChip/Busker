import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthProfilePageComponent } from './auth-profile-page/auth-profile-page.component';
import { UnauthProfilePageComponent } from './unauth-profile-page/unauth-profile-page.component';
import { FormsModule } from '@angular/forms';
import { CurrentUserComponent } from './current-user/current-user.component';
import { PostListComponent } from 'src/app/post/post-list/post-list.component';
import { PostModule } from 'src/app/post/post.module';



@NgModule({
  declarations: [
    AuthProfilePageComponent,
    UnauthProfilePageComponent,
    CurrentUserComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule, 
  ],
  exports:[
    AuthProfilePageComponent,
    UnauthProfilePageComponent,
    CurrentUserComponent
  ]
})
export class ProfilesModule { }
