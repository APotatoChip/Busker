import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { PostModule } from '../post/post.module';
import { UserRoutingModule } from './user-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { OtherUserComponent } from './other-user/other-user.component';
import { ProfilesModule } from '../profiles/profiles.module';






@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    OtherUserComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule, 
    MatInputModule,
    MatRadioModule,
    FormsModule,
    UserRoutingModule,
    SharedModule,
    CoreModule,
    PostModule,
    ProfilesModule,
  ],
  exports:[
   
  ]
})
export class UserModule { }
