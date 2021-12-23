import { Component, OnInit } from '@angular/core';
import { courseCatalogComplete, courseCatalogsList, loadCourseCatalogCompleteSuccess, loadCourseCatalogSuccess } from '../store/course-catalogs/course-catalog.action';
import {selectCourseCatlogsLoading,selectAllCourseCatalogsSelector} from '../store/course-catalogs/course-catalog.selector';
import { select, Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
/*import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';*/
import { CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-course-catalogs',
  templateUrl: './course-catalogs.component.html',
  styleUrls: ['./course-catalogs.component.scss']
})
export class CourseCatalogsComponent implements OnInit {
  tab: any = 'tab1';
  tab1: any;
  tab2: any;
  tab3: any;
  list: boolean = true;
  grid: boolean = false;
  courseCatalogs: any = [];
  courseCatalogsComplete: any = [];
  getCourseCatlogsListData: any = [];
  public dragging: boolean;
  constructor(private store:Store) {
  }
  $loading: Observable<boolean> = this.store.select(selectCourseCatlogsLoading)
  ngOnInit() {
    this.store.dispatch(courseCatalogsList());
    this.getCourseCatlogsListData = [];
    this.store.select(selectAllCourseCatalogsSelector).subscribe((res) => {
      this.getCourseCatlogsListData.push(res);
    })
    this.store.dispatch(courseCatalogComplete());
    this.courseCatalogs = this.getCourseCatlogsListData[0];
    this.courseCatalogsComplete = this.getCourseCatlogsListData[1];
  }
  onClick(isCheck: any) {
    if (isCheck == 1) {
      this.tab = 'tab1';
    } else if (isCheck == 2) {
      this.tab = 'tab2';
    } else {
      this.tab = 'tab3';
    }
  }
  handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }
  displayRecord(event: any) {
    if (event == 'list') {
      this.list = true
      this.grid = false;
    } else {
      this.grid = true;
      this.list = false;
    }
  }
  deleteShoppingCartItem() {

  }
  addShoppingCartItem(event:any) {

  }
}
