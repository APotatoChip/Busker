import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserRoutingModule } from '../feature/user/user-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { RePasswordValidatorDirective } from './re-password-validator.directive';
import { MaterialModule } from '../material/material.module';
import { NavigationModule } from './navigation/navigation.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    LoaderComponent,
    RePasswordValidatorDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    UserRoutingModule,
    NavigationModule
  ],
  exports:[
    NavigationComponent,
    FooterComponent,
  LoaderComponent,
  RePasswordValidatorDirective,
  ]
})
export class SharedModule { }
