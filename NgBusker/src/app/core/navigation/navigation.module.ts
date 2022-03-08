import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../../material/material.module';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../../app-routing.module';
import { UserService } from '../../user/user.service';



@NgModule({
  declarations: [
    HeaderComponent, 
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],providers:[
    UserService
  ],exports:[
    HeaderComponent,
    SidenavListComponent
  ]
})
export class NavigationModule { }
