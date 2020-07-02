import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['tabs/tabs/tab5']);
  }

}
