import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './post/comment/comment.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { HeroComponent } from './hero/hero.component';

import { NavigationModule } from './navigation/navigation.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    CommentComponent,
    SearchComponent,
    MapComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavigationComponent,FooterComponent]
})
export class AppModule { }
