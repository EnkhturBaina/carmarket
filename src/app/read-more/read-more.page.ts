import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.page.html',
  styleUrls: ['./read-more.page.scss'],
})
export class ReadMorePage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }
  back(){ 
    this.modalCtrl.dismiss();
  }

}
