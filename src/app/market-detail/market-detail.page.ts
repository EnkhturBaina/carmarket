import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController, ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReadMorePage } from '../read-more/read-more.page';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.page.html',
  styleUrls: ['./market-detail.page.scss'],
})
export class MarketDetailPage implements OnInit {
icon : any;
  constructor(private actionsheetCtrl : ActionSheetController ,
    private toastController : ToastController , 
    private router : Router , private modalController : ModalController,
    private alertCtrl : AlertController) { }

  ngOnInit() {
    this.icon ="bookmark-outline";
  }
  async openMenu(){
    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Social Sharing',
      buttons: [{
        text: 'Share via Facebook',
        role: 'destructive',
        icon: 'logo-facebook',
        cssClass: 'facebookIcon',
        handler: () => {
          console.log('Facebook share');
        }
      }, {
        text: 'Share via Twitter',
        icon: 'logo-twitter',
        cssClass: 'twitterIcon',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Share via Whatsapp',
        icon: 'logo-whatsapp',
        cssClass: 'whatsappIcon',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async save(){
    this.icon ="bookmark";
    const toast = await this.toastController.create({
      message: 'Бүтээгдэхүүн амжилттай хадгалагдлаа',
      duration: 2000
    });
    toast.present();
  }
  rent(){
    this.router.navigate(['rent']);
  }
  async loanrequest(){
    const alert = await this.alertCtrl.create({
      header: 'Санамж',
      subHeader : '',
      message: 'Таны зээлийн хүсэлт илгээгдэх гэж байна. Орлогын мэдээллээ үнэн зөв эсэхийг ахин нэг шалгана уу',
      buttons: [
        {
          text: 'Шалгах',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['profile']);
          }
        }, 
        {
          text: 'Үргэлжлүүлэх',
          role: 'okay',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['request']);
          }
        },
      ]
    });
  
    await alert.present();
  }
  async readMore(){
    const modal = await this.modalController.create({
      component: ReadMorePage
    });
    return await modal.present();
  }

}
