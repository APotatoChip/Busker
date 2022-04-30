import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProfilesModule } from './profiles/profiles.module';
import { MapModule } from './map/map.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentsModule } from './comments/comments.module';
import { HeroModule } from './hero/hero.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ProfilesModule,
    MapModule,
    UserModule,
    PostModule,
    CommentsModule,
    HeroModule
  ]
})
export class FeatureModule { }
