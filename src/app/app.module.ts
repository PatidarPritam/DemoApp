import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/FooterComponent/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OnThisDayComponent } from './components/on-this-day/on-this-day.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AggregatedFeaturedComponent } from './components/aggregated-featured/aggregated-featured.component';
import { RecommendedListOfTopicsComponent } from './components/recommended-list-of-topics/recommended-list-of-topics.component';

import {HttpClientModule} from  '@angular/common/http';
import { ViewPageComponent } from './components/view-page/view-page.component'; // change
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    OnThisDayComponent,
    AnnouncementComponent,
    AggregatedFeaturedComponent,
    RecommendedListOfTopicsComponent,
    ViewPageComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //change

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
