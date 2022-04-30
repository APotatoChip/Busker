import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserModule } from '../user/user.module';
import { UserRoutingModule } from '../user/user-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[

  ]
})
export class MapModule { }
