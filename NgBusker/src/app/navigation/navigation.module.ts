import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from '../navigation/side-nav/side-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],exports:[HeaderComponent,SideNavComponent]
})
export class NavigationModule { }
