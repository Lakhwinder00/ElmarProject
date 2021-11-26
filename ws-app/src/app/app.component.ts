import { Component,OnInit} from '@angular/core';

import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  items:MenuItem[]|any;
  ngOnInit() {
    this.items = [
      {
        label: 'DashBoard',
        icon: 'pi pi-pw pi-file'
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
}


