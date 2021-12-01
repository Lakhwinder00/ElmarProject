import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isExpanded: boolean = false;
  collapsed = true;
  items: MenuItem[] | any;
  model: any = [];
  items1:any = [
    {
      label: 'Help And Tutorials',
      icon: 'fa fa-info-circle',
      items: [{
       label: 'New',
       icon: 'pi pi-fw pi-plus',
       items: [
         { label: 'User', icon: 'pi pi-fw pi-user-plus' },
         { label: 'Filter', icon: 'pi pi-fw pi-filter' }
       ]
      },
      { label: 'Open', icon: 'pi pi-fw pi-external-link' },
      { separator: true },
      { label: 'Quit', icon: 'pi pi-fw pi-times' }
      ]
    },
    {
      label: 'Analytics',
      icon: 'fa-fw fal fa-tachometer-alt-fast',
      routerLink: '/registerlist'
    },
    {
      label: 'Create New',
      icon: 'fa fa-plus fa-fw',
      routerLink: '/course'
    },
    {
      label: 'Upload',
      icon: 'fas fa-upload fa-fw',
      routerLink: '/transcript'
    },
    {
      label: 'Users',
      icon: 'fa-fw far fa-calendar-alt',
      routerLink: '/email'
    },
   {
     label: 'Schedule/Calander',
     icon: 'pi pi-fw pi-book',
     routerLink: '/roles'
    },
    {
      label: 'Cummunity/Messaging',
      icon: 'pi pi-fw pi-list',
      routerLink: '/orders'
    },
    {
      label: 'Learning Content',
      icon: 'pi pi-fw pi-list',
      routerLink: '/discussions'
    },
    {
      label: 'Files & Media',
      icon: 'pi pi-fw pi-sitemap',
      routerLink: '/userassoclinks'
    },
    {
      label: 'Web & Email Content',
      icon: 'pi pi-fw pi-user-plus',
      routerLink: '/customfields'
    },
    {
      label: 'StoreFront & Commerce',
      icon: 'pi pi-fw pi-users',
      routerLink: '/usergroups'
    },
    {
      label: 'Advanced',
      icon: 'pi pi-fw pi-book',
      routerLink: '/addresses'
    },
    {
      label: 'Configuration & Tools',
      icon: 'pi pi-fw pi-slack',
      routerLink: '/history'
    }
  ];
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
      { route: '/home', text: 'Home', icon: 'fa fa-info-circle', queryParams: '', childern: false },
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
