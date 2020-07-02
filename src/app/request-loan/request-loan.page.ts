import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-loan',
  templateUrl: './request-loan.page.html',
  styleUrls: ['./request-loan.page.scss'],
})
export class RequestLoanPage implements OnInit {

  constructor(private alertController : AlertController , private router : Router) { }

  ngOnInit() {
  }
  async send(){
    const alert = await this.alertController.create({
      // header: 'Хуруунийн хээгээ уншуулна уу',
      subHeader : '',
      message: 'Хүсэлт амжилттай илгээгдлээ. Таньд удахгүй хариу илгээх болно. ',
      buttons: [
        {
          text: 'Хаах',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['tabs/tabs/tab1']);
          }
        }, 
      ]
    });
    await alert.present();
  }

}
