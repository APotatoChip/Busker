import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationModule } from './navigation/navigation.module';




@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports:[
    FooterComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
