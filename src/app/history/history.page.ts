import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
segment : any;
  constructor(private router : Router) {
    this.segment = '1';
   }

  ngOnInit() {
  }
  search(){
    this.router.navigate(['addproduct']);
  }
}
