import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSubmenuOpened:boolean=false;
  isExpanded: boolean = false;
  collapsed = true;
  items: MenuItem[] | any;
  model: any = [];
  items1: any = [
    {
      label: 'Help And Tutorials',
      icon: 'fa fa-info-circle',
      routerLink: '/registerlist',
      childeren: false, subMenu: false
    },
    {
      label: 'Analytics',
      icon: 'fa-fw fal fa-tachometer-alt-fast',
      routerLink: '/registerlist',
      childeren: false, subMenu: false
    },
    {
      label: 'Create New',
      icon: 'fa fa-plus fa-fw',
      routerLink: '/course'
      ,
      childeren: false, subMenu: false
    },
    {
      label: 'Upload',
      icon: 'fas fa-upload fa-fw',
      routerLink: '/transcript'
      ,
      childern: false,
      subMenu: false
    },
    {
      label: 'Users',
      icon: 'fa-fw far fa-calendar-alt',
      routerLink: '/email'
      ,
      childern: true,
      subMenu: false,
      items: [{
        label: 'Users(8,676)',
        icon: 'pi pi-fw pi-plus',
        childeren: false, subMenu: false

      },
      { label: 'Address(223)', icon: 'pi pi-fw pi-external-link' },
      { label: 'Registrations(1,053)', icon: 'pi pi-fw pi-times' },
      { label: 'Roles(7)', icon: 'pi pi-fw pi-times' },
      { label: 'Duplicate Detector', icon: 'pi pi-fw pi-times' },
      { label: 'Member Type(1)', icon: 'pi pi-fw pi-times' }
      ]
    },
    {
      label: 'Schedule/Calander',
      icon: 'pi pi-fw pi-book',
      routerLink: '/roles'
      ,
      childern: false,
      subMenu: false
    },
    {
      label: 'Cummunity/Messaging',
      icon: 'pi pi-fw pi-list',
      routerLink: '/orders'
      ,
      childern: false,
      subMenu: false
    },
    {
      label: 'Learning Content',
      icon: 'pi pi-fw pi-list',
      routerLink: '/discussions',
      childern: false,
      subMenu: false
    },
    {
      label: 'Files & Media',
      icon: 'pi pi-fw pi-sitemap',
      routerLink: '/userassoclinks',
      subMenu: false,
      childern: false,
    },
    {
      label: 'Web & Email Content',
      icon: 'pi pi-fw pi-user-plus',
      routerLink: '/customfields',
      childern: false,subMenu: false
    },
    {
      label: 'StoreFront & Commerce',
      icon: 'pi pi-fw pi-users',
      routerLink: '/usergroups',
      childern: false,subMenu: false
    },
    {
      label: 'Advanced',
      icon: 'pi pi-fw pi-book',
      routerLink: '/addresses',
      childern: false,subMenu: false
    },
    {
      label: 'Configuration & Tools',
      icon: 'pi pi-fw pi-slack',
      routerLink: '/history'
      ,
      childern: false,subMenu: false
    }
  ];
  handleSidebarToggle() {
    this.isExpanded = !this.isExpanded;
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
      { route: '/configuration', text: 'Configuration', icon: 'fa-fw fal fa-tachometer-alt-fast', queryParams: '', childern: false },
      { route: '/configuration', text: 'Help And Tutorial', icon: 'fa fa-plus fa-fw', queryParams: '', childern: true },
      { route: '/configuration', text: 'Analytics', icon: 'fa fa-search', queryParams: '', childern: false },
      { route: '/configuration', text: 'Create New', icon: 'fas fa-upload fa-fw', queryParams: '', childern: false },
      { route: '/configuration', text: 'child 3', icon: 'fa-fw fas fa-users', queryParams: '', childern: false },
      { route: '/configuration', text: 'Users', icon: 'fa-fw far fa-calendar-alt', queryParams: '', childern: true }
    ]
  }
  pickclass(): boolean {
    return this.isExpanded
  }
  subMenuClick(menu:any) {
  menu.subMenu=!menu?.subMenu
  }
}
