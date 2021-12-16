import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { CustomMenuItem } from 'src/app/core/models/menu-item.model';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { ApplicationStateService } from 'src/app/core/services/application-state.service';

@Component({
    selector: 'app-admin-menu',
    templateUrl: 'admin-menu.component.html',
    styleUrls: ['admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

    items: CustomMenuItem[];
    selectedItem: string;
    visible: boolean;
    itemsMenu: any = [
        {
          label: 'Help And Tutorials',
          icon: 'fa fa-info-circle',
          routerLink: '/registerlist',
          childern: false, subMenu: false
        },
        {
          label: 'Analytics',
          icon: 'fa-fw fal fa-tachometer-alt-fast',
          routerLink: '/registerlist',
          childern: false, subMenu: false
        },
        {
          label: 'Create New',
          icon: 'fa fa-plus fa-fw',
          routerLink: '/course'
          ,
          childern: false, subMenu: false
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
    constructor(private routeStateService: RouteStateService,
        private sessionService: SessionService,
        private menuDataService: MenuDataService,
        private applicationStateService: ApplicationStateService) { }

    ngOnInit() {
        this.items = this.menuDataService.getMenuList();

        var that = this;
        this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
            if (data && data != null) {
                that.visible = !that.visible;
            }
        });

        if (this.applicationStateService.getIsMobileResolution()) {
            this.visible = false;
        } else {
            this.visible = true;
        }

        var activeMenu = this.sessionService.getItem("active-menu");
        if (activeMenu) {
            this.selectedItem = activeMenu;
        } else {
            this.selectedItem = "Home";
        }
    }

    ngOnDestroy() {
        this.menuDataService.toggleMenuBar.observers.forEach(function (element) { element.complete(); });
    }

    // on menu click event
    onMenuClick(menu: CustomMenuItem) {
        // if child are available then open child
        if (menu.Childs != undefined || menu.Childs != null) {
            this.toggleSubMenu(menu);
            return;
        }
        if (menu.RouterLink == undefined || menu.RouterLink == null || menu.RouterLink == "") {
            this.routeStateService.add("Error 404", "/error", null, false);
            return;
        }
        this.selectedItem = menu.Label;
        this.sessionService.setItem("active-menu", menu.Label);
        this.routeStateService.add(menu.Label, menu.RouterLink, null, true);
        // hide menu bar after menu click for mobile layout        
        setTimeout(() => {
            if (this.applicationStateService.getIsMobileResolution()) {
                this.visible = false;
            }
        }, 100);
    }

    // toggle sub menu on click
    toggleSubMenu(menu: CustomMenuItem) {
        menu.IsChildVisible = !menu.IsChildVisible;
    }

}
