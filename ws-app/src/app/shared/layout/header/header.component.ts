import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLayout: any;
  constructor(private route: Router, private Location: Location) {
    let getUrl = this.Location.path().split('/');
    if (getUrl.length != 0)
      this.isLayout = getUrl[1];
  }
  ngOnInit() {


  }

}
