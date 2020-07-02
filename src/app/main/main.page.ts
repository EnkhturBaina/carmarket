import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  skip(){
    this.router.navigate(['service']);
  }
  continue(slides){
    console.log(slides);
    slides.slideNext();
  }

}
