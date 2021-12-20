import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-catalogs',
  templateUrl: './course-catalogs.component.html',
  styleUrls: ['./course-catalogs.component.scss']
})
export class CourseCatalogsComponent implements OnInit {
  tab: any = 'tab1';
  tab1: any;
  tab2: any;
  tab3: any;
  constructor() {}

  ngOnInit() {

  }
  onClick(isCheck: any) {
    if (isCheck == 1) {
      this.tab = 'tab1';
    } else if (isCheck == 2) {
      this.tab = 'tab2';
    } else {
      this.tab = 'tab3';
    }
  }

}
