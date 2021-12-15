import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-footer',
  templateUrl: 'admin-footer.component.html',
  styleUrls: ['admin-footer.component.css']
})
export class AdminFooterComponent implements OnInit {

  version: string;

  constructor() { }

  ngOnInit() {
    // this.version = environment.version;
  }

}
