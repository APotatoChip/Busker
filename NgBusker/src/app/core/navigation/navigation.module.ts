import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { UserRoutingModule } from 'src/app/user/user-routing.module';

import { UserService } from '../../user/user.service';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';






@NgModule({
  declarations: [
    HeaderComponent, 
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    UserRoutingModule

  ],providers:[
    UserService
  ],exports:[
    HeaderComponent,
    SidenavListComponent
  ]
})
export class NavigationModule { }
