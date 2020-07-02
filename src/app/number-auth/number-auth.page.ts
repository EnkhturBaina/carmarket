import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-auth',
  templateUrl: './number-auth.page.html',
  styleUrls: ['./number-auth.page.scss'],
})
export class NumberAuthPage implements OnInit {

  constructor(private loadingController : LoadingController , private router : Router) { }

  ngOnInit() {
  }
  async continue(){
      const loading = await this.loadingController.create({
        message: 'Түр хүлээнэ үү',
        duration: 1000
      });
      await loading.present().then((data)=>{
        this.router.navigate(['tabs/tabs/tab1']);
      })
      


  }

}
