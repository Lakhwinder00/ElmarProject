import { Component, OnInit,ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component'
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-admincomponent',
  templateUrl: './admincomponent.component.html',
  styleUrls: ['./admincomponent.component.scss']
})
export class AdmincomponentComponent implements OnInit {

  items: MenuItem[] | any;
  menu: boolean = false;
  isShowMenu: boolean = false;
  isclass: boolean = false;
  systemRoles: any = [];
  items1: any = [
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
      routerLink: '/admin/registerlist'
    },
    {
      label: 'Create New',
      icon: 'fa fa-plus fa-fw',
      routerLink: '/admin/course'
    },
    {
      label: 'Upload',
      icon: 'fas fa-upload fa-fw',
      routerLink: '/transcript'
    },
    {
      label: 'Users',
      icon: 'fa-fw far fa-calendar-alt',
      routerLink: '/admin/email'
    },
    {
      label: 'Schedule/Calander',
      icon: 'pi pi-fw pi-book',
      routerLink: '/admin/roles'
    },
    {
      label: 'Cummunity/Messaging',
      icon: 'pi pi-fw pi-list',
      routerLink: '/admin/orders'
    },
    {
      label: 'Learning Content',
      icon: 'pi pi-fw pi-list',
      routerLink: '/admin/discussions'
    },
    {
      label: 'Files & Media',
      icon: 'pi pi-fw pi-sitemap',
      routerLink: '/userassoclinks'
    },
    {
      label: 'Web & Email Content',
      icon: 'pi pi-fw pi-user-plus',
      routerLink: '/admin/customfields'
    },
    {
      label: 'StoreFront & Commerce',
      icon: 'pi pi-fw pi-users',
      routerLink: '/admin/usergroups'
    },
    {
      label: 'Advanced',
      icon: 'pi pi-fw pi-book',
      routerLink: '/admin/addresses'
    },
    {
      label: 'Configuration & Tools',
      icon: 'pi pi-fw pi-slack',
      routerLink: '/admin/history'
    }
  ];
  @ViewChild("sidebarComponent") sidebarComponent!: SidebarComponent;
  ngOnInit() {
    this.items = [
      {
        label: 'DashBoard',
        icon: 'pi pi-pw pi-file',
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
        routerLink: '/transcript'
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
  expand(): void {
    this.sidebarComponent.isExpanded;
    this.isclass = !this.isclass
    //let boolen = false;
    //if (boolen == true) {
    //  this.isclass = true;
    //} else {
    //  this.isclass = false;
    //}
  }


}
