import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import {MatIconModule} from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { PostModule } from '../post/post.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from '../shared/profiles/profiles.component';
import { ProfilesModule } from '../shared/profiles/profiles.module';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule, 
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,
    SharedModule,
    CoreModule,
    PostModule,
  ],
  exports:[
   
  ]
})
export class UserModule { }
