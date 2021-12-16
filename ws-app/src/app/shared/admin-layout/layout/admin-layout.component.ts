import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { ApplicationStateService } from 'src/app/core/services/application-state.service';
import { ThemeService} from '../../../../../src/app/core/services/theme.service'
import { SessionService } from '../../../../../src/app/core/services/session.service'

@Component({
  selector: 'app-admin-layout',
  templateUrl: 'admin-layout.component.html',
  styleUrls: ['admin-layout.component.css'],
   
})
export class AdminLayoutComponent implements OnInit {

  isMenuVisible: boolean=false;
  theme: string;
  constructor(private menuDataService: MenuDataService,
    private applicationStateService: ApplicationStateService, private themeService: ThemeService, private sessionService: SessionService) {
    var theme = this.sessionService.getItem("selected-theme");
    if (theme != null && theme.length > 0) {
      this.theme = theme;
      this.themeService.selectTheme(theme);
    } else {
      this.theme = "theme-teal";
    }
  }

  ngOnInit() {
    var that = this;
    this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
      if (data && data != null) {
        that.isMenuVisible = !that.isMenuVisible;
      }
    });
    this.themeService.theme.subscribe((val: string) => {
      this.theme = val;
    });
    if (this.applicationStateService.getIsMobileResolution()) {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

  ngOnDestroy() {
    this.menuDataService.toggleMenuBar.observers.forEach(function (element) { element.complete(); });
    this.themeService.theme.observers.forEach(function (element) { element.complete(); });
  }

}
