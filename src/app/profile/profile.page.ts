import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController, PopoverController } from '@ionic/angular';
import { SettingsComponent } from '../settings/settings.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  segment : any;
  user : any;
  card: any;
  boolean  : any;
  change : any;
  lastname : any;
  firstname : any;
  address : any;
  constructor(private alertController : AlertController ,
     private loadingController : LoadingController,
     private actionSheetController : ActionSheetController,
     private popoverController : PopoverController,
     private router : Router) {
    this.segment =1;
    this.user = 'disactive';
    this.card = 'active';
    this.change = 'disactive';
    this.boolean = false;
    this.lastname = 'Батсүх';
    this.firstname = 'Энхмаа';
    this.address = 'Улаанбаатар хот , БЗД , 6-р хороо';
    
   }

  ngOnInit() {
  }
 async readFinger(){
   console.log('finger');
   
  const alert = await this.alertController.create({
    header: 'Хуруунийн хээгээ уншуулна уу',
    subHeader : '',
    message: '<img height="30px" src="https://ioshacker.com/wp-content/uploads/2015/01/Apple-touch-id.png"><ion-spinner name="lines-small" duration="5"></ion-spinner>',
    buttons: [
      {
        text: 'Буцах',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, 
    ]
  });

  await alert.present();
  setTimeout(() => {
    alert.dismiss();
    this.boolean = true;
    // this.navCtrl.push('SpecificPage');
  }, 6000);
  // const loading = await this.loadingController.create({
  //   message: 'Please wait...',
  //   duration: 2000
  // });
  // await loading.present();
  // alert.dismiss();

  }
  async takePhoto(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Үнэмлэхний зураг оруулах',
      buttons: [{
        text: 'Утаснаас оруулах',
        // role: 'destructive',
        icon: 'image',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Камер ашиглах',
        icon: 'camera',
        handler: () => {
          console.log('Share clicked');
        }
      },]
    });
    await actionSheet.present();
  }
  create(){

  }
  async settings(ev){
    const popover = await this.popoverController.create({
      component: SettingsComponent,
      cssClass: 'pop-over-style',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  loan(){
    this.router.navigate(['request-loan']);
  }

}
