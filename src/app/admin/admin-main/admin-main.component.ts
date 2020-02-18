import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onClick($event) {
    this.router.navigate(['/']);
    console.log("returning home..");
  }

}