import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
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
    
  };
  ngOnInit() {
    this.items = [
      {
        label: 'DashBoard',
        icon: 'pi pi-pw pi-file',
        routerLink: '/admin/dashboard'
        //items: [{
        //  label: 'New',
        //  icon: 'pi pi-fw pi-plus',
        //  items: [
        //    { label: 'User', icon: 'pi pi-fw pi-user-plus' },
        //    { label: 'Filter', icon: 'pi pi-fw pi-filter' }
        //  ]
        //},
        //{ label: 'Open', icon: 'pi pi-fw pi-external-link' },
        //{ separator: true },
        //{ label: 'Quit', icon: 'pi pi-fw pi-times' }
        //]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/admin/registerlist'
      },
      {
        label: 'Course',
        icon: 'pi pi-fw pi-inbox',
        routerLink: '/admin/course'
      },
      {
        label: 'Transcript',
        icon: 'pi pi-fw pi-minus',
        routerLink: '/admin/transcript'
      },
      {
        label: 'Email',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/admin/email'
      },
      {
        label: 'Roles',
        icon: 'pi pi-fw pi-book',
        routerLink: '/admin/roles'
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-list',
        routerLink: '/admin/orders'
      },
      {
        label: 'Discussions',
        icon: 'pi pi-fw pi-list',
        routerLink: '/admin/discussions'
      },
      {
        label: 'User Assoc Links',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: '/admin/userassoclinks'
      },
      {
        label: 'Custom Fields',
        icon: 'pi pi-fw pi-user-plus',
        routerLink: '/admin/customfields'
      },
      {
        label: 'User Groups',
        icon: 'pi pi-fw pi-users',
        routerLink: '/admin/usergroups'
      },
      {
        label: 'Addresses',
        icon: 'pi pi-fw pi-book',
        routerLink: '/admin/addresses'
      },
      {
        label: 'History',
        icon: 'pi pi-fw pi-slack',
        routerLink: '/admin/history'
      }
    ];
  }
  pickclass(): boolean {
    return this.isExpanded
  }
  subMenuClick(menu:any) {
  if(menu?.items?.length)
  menu.subMenu=!menu?.subMenu
  }
}
