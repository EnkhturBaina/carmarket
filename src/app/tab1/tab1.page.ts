import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  segment : any;
  topStories: any;
  constructor(private router : Router , private popoverController : PopoverController, private alertController : AlertController) {
    this.topStories = [
      {title: "Exploring San Francisco", author: "Rea Ramsey", body: "", picture: "https://dev.veritech.mn/storage/uploads/process/file_1583988296489741_15813863673951.jpg"},
      {title: "Coffee the right way", author: "Ellesha Hartley", body: "", picture: "https://dev.veritech.mn/storage/uploads/process/file_1583988296562212_15813863674511.jpg"},
      {title: "Best Hiking In Yosemite", author: "Vinnie Alexander", body: "", picture: "https://dev.veritech.mn/storage/uploads/process/file_1583988296531290_15813863674731.jpg"},
      {title: "Astro Photography Guide", author: "Greg Rakozy", body: "", picture: "https://dev.veritech.mn/storage/uploads/process/file_1583988296292232_15813863674701.jpg"}
    ]
    this.time();
    this.segment = 1;
  }
  continue(){


  }
  async time(){

    const alert = await this.alertController.create({
      subHeader: 'Санамж',
      message: 'Та хувийн мэдээллээ шинэчилнэ үү',
    });

    await alert.present();
    setTimeout(() => {
      alert.dismiss();
    
      // this.navCtrl.push('SpecificPage');
    }, 2000);
  }
  skip(){
    this.router.navigate(['login']);
  }
  detail(){
    this.router.navigate(['market-detail']);
  }
  async popNotification(ev){
    const popover = await this.popoverController.create({
      component: NotificationComponent,
      cssClass: 'pop-over-style',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  onInput(event){
    this.router.navigate(['login'])
  }
  search(){
    console.log('cancel');
    this.router.navigate(['search']);
    
  }
}
