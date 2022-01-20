import { NgModule } from '@angular/core';
import{MatButtonModule}from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
 

const material=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule, 
  MatSidenavModule, MatListModule

]

@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
