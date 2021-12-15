import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private route: Router, private Location: Location) {
   
  }

  ngOnInit(): void {
   
  }

}
