import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from 'src/app/feature/user/user-routing.module';

import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

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

  ],exports:[
    HeaderComponent,
    SidenavListComponent
  ]
})
export class NavigationModule { }
