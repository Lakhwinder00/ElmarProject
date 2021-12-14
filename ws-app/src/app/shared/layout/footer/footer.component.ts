import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isLayout: any;
  constructor(private route: Router, private Location: Location) {
    let getUrl = this.Location.path().split('/');
    if (getUrl.length != 0)
      this.isLayout = getUrl[1];
  }
  ngOnInit() {


  }

}
