import { Component,OnInit,AfterViewInit,ViewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Navigation, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLayout: any;
  constructor(private route: Router, private Location: Location) {
  }
  ngOnInit() {
    
  }
}


