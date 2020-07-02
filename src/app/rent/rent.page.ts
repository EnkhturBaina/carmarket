import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.page.html',
  styleUrls: ['./rent.page.scss'],
})
export class RentPage implements OnInit {
  booleanData : boolean = false;
  constructor(private alertController : AlertController) {
    this.booleanData =false;
   }

  ngOnInit() {
  }
  updateMyDate(ev){
    this.booleanData = true;
  }
  async order(){
    const alert = await this.alertController.create({
      subHeader: 'Санамж',
      message: 'Таны мэдээлэл дутуу байгаа тул мэдээллээ шинэчилнэ үү',
    });
    await alert.present();
  }
}
