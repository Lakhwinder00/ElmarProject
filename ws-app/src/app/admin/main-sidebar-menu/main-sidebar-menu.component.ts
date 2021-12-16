import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-sidebar-menu',
  templateUrl: './main-sidebar-menu.component.html',
  styleUrls: ['./main-sidebar-menu.component.scss']
})
export class MainSidebarMenuComponent implements OnInit {
  items: any = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
