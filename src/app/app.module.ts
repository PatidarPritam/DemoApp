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

import {HttpClientModule} from  '@angular/common/http'; // for service file
import { ViewPageComponent } from './components/view-page/view-page.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component'; // change
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    OnThisDayComponent,
    AnnouncementComponent,
    AggregatedFeaturedComponent,
    RecommendedListOfTopicsComponent,
    ViewPageComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    ServicesComponent
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
