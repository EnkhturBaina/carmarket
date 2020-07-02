import { Component, OnInit } from '@angular/core';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {

  constructor(private appRate: AppRate,public platform: Platform, private router : Router) { }

  ngOnInit() {
  }
  appRating() {
    this.platform.ready().then(() => {

      // set certain preferences
      this.appRate.preferences.storeAppURL = {
        ios: '<app_id>',
        android: 'market://details?id=<package_name>',
        windows: 'ms-windows-store://review/?ProductId=<store_id>'
      }

      this.appRate.promptForRating(true);
    })
  }
  detail(){
    this.router.navigate(['market-detail']);
  }

}
