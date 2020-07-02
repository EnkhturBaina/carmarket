import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapPage } from '../map/map.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalController : ModalController) {}
 async map(){
    const modal = await this.modalController.create({
      component: MapPage
    });
    return await modal.present();
  }

}
