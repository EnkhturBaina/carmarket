import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StarRatingModule, StarRating } from 'ionic4-star-rating';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { IonicRatingModule } from 'ionic4-rating';
import { MapPage } from './map/map.page';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import { SMS } from '@ionic-native/sms/ngx';
import { ReadMorePage } from './read-more/read-more.page';

@NgModule({
  declarations: [AppComponent, MapPage , NotificationComponent ,SettingsComponent ,ReadMorePage],
  entryComponents: [MapPage , NotificationComponent , SettingsComponent , ReadMorePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ,IonicRatingModule ,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
