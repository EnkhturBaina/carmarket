import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  disabled = true;
  isAgree : boolean = false;
  constructor(private router : Router) { 
    this.disabled = true;
  }

  ngOnInit() {
  }
  agree(agree){
    console.log(agree);
    if(agree == false){
      this.disabled = false;
    }
    else if(agree == true){
      this.disabled = true;
    }
    
  }
  continue(){
    this.router.navigate(['login']);
  }

}
