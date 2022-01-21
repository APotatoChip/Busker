import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { PostModule } from '../post/post.module';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule, 
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,FormsModule,
    PostModule
  ],
  exports:[
   
  ]
})
export class UserModule { }
