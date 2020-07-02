import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router , private sms: SMS ,private alertController : AlertController) { }

  ngOnInit() {
  }
  login(){
    this.router.navigate(['tabs/tabs/tab1']);
  }
  register(){
    // this.sms.send('88608512', 'Hello world!');
    this.router.navigate(['register']);
  }
 async finger(){
    const alert = await this.alertController.create({
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'Хурууны хээгээ тохируулна уу',
      buttons: ['За']
    });

    await alert.present();
  }

}
