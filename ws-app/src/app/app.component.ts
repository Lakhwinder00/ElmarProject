import { Component,OnInit,AfterViewInit,ViewChild} from '@angular/core';
import {SidebarComponent} from '../app/sidebar/sidebar.component'
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //@ViewChild("sidebarComponent") sidebarComponent: SidebarComponent   
  items: MenuItem[] | any;
  menu: boolean = false;
  isclass: boolean = false;
  systemRoles:any=[];
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
  /*@ViewChild("sidebarComponent") sidebarComponent: SidebarComponent = new SidebarComponent;*/
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
        routerLink: '/registerlist'
      },
      {
        label: 'Course',
        icon: 'pi pi-fw pi-inbox',
        routerLink: '/course'
      },
      {
        label: 'Transcript',
        icon: 'pi pi-fw pi-minus',
        routerLink: '/transcript'
      },
      {
        label: 'Email',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/email'
      },
     {
       label: 'Roles',
       icon: 'pi pi-fw pi-book',
       routerLink: '/roles'
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-list',
        routerLink: '/orders'
      },
      {
        label: 'Discussions',
        icon: 'pi pi-fw pi-list',
        routerLink: '/discussions'
      },
      {
        label: 'User Assoc Links',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: '/userassoclinks'
      },
      {
        label: 'Custom Fields',
        icon: 'pi pi-fw pi-user-plus',
        routerLink: '/customfields'
      },
      {
        label: 'User Groups',
        icon: 'pi pi-fw pi-users',
        routerLink: '/usergroups'
      },
      {
        label: 'Addresses',
        icon: 'pi pi-fw pi-book',
        routerLink: '/addresses'
      },
      {
        label: 'History',
        icon: 'pi pi-fw pi-slack',
        routerLink: '/history'
      }
    ];
  }
   expand(): void {
     this.isclass=!this.isclass
     //let boolen = false;
     //if (boolen == true) {
     //  this.isclass = true;
     //} else {
     //  this.isclass = false;
     //}
   }
 
}


