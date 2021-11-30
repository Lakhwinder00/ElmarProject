import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isExpanded: boolean = false;
  items: MenuItem[] | any;
  @Output() IsClass = new EventEmitter<boolean>();
  handleSidebarToggle() {
    if (this.isExpanded) {
      this.isExpanded = false;
    } else {
      this.isExpanded = true;
    }
  };
  ngOnInit() {
    this.isExpanded = false;
  }
  public pickclass():boolean{
    return this.isExpanded;
  }
}
