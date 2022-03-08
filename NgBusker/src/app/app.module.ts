import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout'
import { HeroComponent } from './hero/hero.component';
import { MapComponent } from './map/map.component';

import { NavigationComponent } from './core/navigation/navigation.component';
import { NavigationModule } from './core/navigation/navigation.module';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CommentsModule } from './comments/comments.module';
import { ProfilesComponent } from './profiles/profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeroComponent,
UserComponent,
    MapComponent,
    NavigationComponent,
    UserComponent,
    NotFoundComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NavigationModule,
    CommentsModule,
    CoreModule

  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
