import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module'

import { UserRoutingModule } from '../user/user-routing.module';
import { NavigationModule } from './navigation/navigation.module';

import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

import { UserService } from '../user/user.service';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,  
    MaterialModule,
    FlexLayoutModule,
    UserRoutingModule
  ],
  providers:[
  
    AuthGuard
  ],
  exports:[
    FooterComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
