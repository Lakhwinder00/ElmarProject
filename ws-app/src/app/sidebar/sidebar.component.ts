import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isExpanded: boolean = false;
  items: MenuItem[] | any;
  model: any = [];
  handleSidebarToggle() {
    this.isExpanded=!this.isExpanded;
    // if (this.isExpanded) {
    //   this.isExpanded = false;
    // } else {
    //   this.isExpanded = true;
    // }
  };
  ngOnInit() {
    this.isExpanded = false;
    this.model = [
      { route: '/home', text:'Home', icon: 'fa fa-info-circle', queryParams: '',childern:false },
      { route: '/configuration', text:'Configuration', icon: 'fa-fw fal fa-tachometer-alt-fast', queryParams: '', childern: false },
      { route: '/configuration', text: 'Help And Tutorial', icon: 'fa fa-plus fa-fw', queryParams: '', childern: true },
      { route: '/configuration', text: 'Analytics', icon: 'fa fa-search', queryParams: '', childern: false },
      { route: '/configuration', text: 'Create New', icon: 'fas fa-upload fa-fw', queryParams: '', childern: false },
      { route: '/configuration', text: 'child 3', icon: 'fa-fw fas fa-users', queryParams: '', childern: false },
      { route: '/configuration', text: 'Users', icon: 'fa-fw far fa-calendar-alt', queryParams: '', childern: false }
    ]
  }
  pickclass(): boolean {
    return this.isExpanded
  }
}
