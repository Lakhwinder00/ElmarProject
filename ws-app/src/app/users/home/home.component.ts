import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { select, Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { IAppState } from '../store/home/app.state'

import { selectAllCourseCatalogSelector, selectCourseCatalogLoading } from '../store/home/app.selector'
import { courseCatalogList, loadCourseCatalogSuccess } from '../store/home/app.action';
import { AppHomeEffect } from './../store/home/app.effect';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loadContent: boolean = false;
  public tagssettings = {};
  public creditssettings = {};
  public sponsersettings = {};
  public typesettings = {};
  public selectedItems = [];
  cradits: any = [];
  creditSettingValue: any = [];
  tagsvalue: any = [];
  typevalue: any = [];
  sponsersvalue: any;
  tags: any = [];
  credits: any = [];
  sponser: any = [];
  type: any = [];
  courseCatalog: any[] = [];
  tab: any = 'tab1';
  tab1: any;
  tab2: any;
  tab3: any;
  searchValue: string = "";
  constructor(private router: Router, private store: Store<IAppState>) { }
  $loading: Observable<boolean> = this.store.select(selectCourseCatalogLoading)
  ngOnInit(): void {
    this.tags = [];
    this.credits = [];
    this.sponser = [];

    this.type = [];
    this.store.dispatch(courseCatalogList())
    this.store.select(selectAllCourseCatalogSelector).subscribe((res) => { this.courseCatalog = res });
    for (var i = 0; i < this.courseCatalog.length; i++) {
      this.tags.push({ item_id: this.courseCatalog[i].tag, item_text: this.courseCatalog[i].tag })
    }
    for (var i = 0; i < this.courseCatalog.length; i++) {
      this.credits.push({ item_id: this.courseCatalog[i].creditstype, item_text: this.courseCatalog[i].creditstype });
    }
    for (var i = 0; i < this.courseCatalog.length; i++) {
      this.sponser.push({ item_id: this.courseCatalog[i].sponser, item_text: this.courseCatalog[i].sponser });
    }
    for (var i = 0; i < this.courseCatalog.length; i++) {
      this.type.push({ item_id: this.courseCatalog[i].type, item_text: this.courseCatalog[i].type });
    }
    this.tagssettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: 'select all',
      unSelectAllText: 'Tags',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      searchPlaceholderText: 'Tags',
      noDataAvailablePlaceholderText: 'Tags',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
    this.creditssettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: 'select all',
      unSelectAllText: 'No Data',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      searchPlaceholderText: 'Credits',
      noDataAvailablePlaceholderText: 'Credits',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
    this.sponsersettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: 'select all',
      unSelectAllText: 'No Data',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      searchPlaceholderText: 'Sponser',
      noDataAvailablePlaceholderText: 'Sponser',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
    this.typesettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: 'select all',
      unSelectAllText: 'No Data',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      searchPlaceholderText: 'Type',
      noDataAvailablePlaceholderText: 'Type',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };

  }
  public onFilterChange(item: any) {
    debugger
    console.log(item);
    this.commonfilter()
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any, code: number) {
    console.log(item);
    switch (code) {
      case 1: {
      this.store.select(selectAllCourseCatalogSelector).subscribe((res) => {
        this.courseCatalog = res.filter(f => this.creditSettingValue?.some(x => x.item_text?.toLowerCase().includes(f.creditstype.toLowerCase()))
        )});

        break;
      }
      case 2: {
        this.store.select(selectAllCourseCatalogSelector).subscribe((res) => {
          this.courseCatalog = res.filter(f => this.tagsvalue?.some(x => x.item_text?.toLowerCase().includes(f.tag.toLowerCase()))
          )});
        break;
      }
      case 3: {
        this.store.select(selectAllCourseCatalogSelector).subscribe((res) => {
          this.courseCatalog = res.filter((f:any) => this.sponsersvalue?.some(x => x.item_text?.toLowerCase().includes(f?.sponser.toLowerCase()))
          )}); 
        break;
      }
      case 4: {
        this.store.select(selectAllCourseCatalogSelector).subscribe((res) => {
          this.courseCatalog = res.filter((f:any) => this.typevalue?.some(x => x.item_text?.toLowerCase().includes(f?.type.toLowerCase()))
          )}); 
        break;
      }

      default: {
        //statements; 
        break;
      }
    }

    // this.commonfilter(this.searchValue, this.creditSettingValue, this.sponsersvalue, this.tagsvalue, this.typevalue);

  }
  public onDeSelect(item: any) {
    debugger
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }
  KeyupFunc($filter: any) {
    this.store.select(selectAllCourseCatalogSelector).subscribe((res) => {
      this.courseCatalog = res.filter((f) => f.name.toLowerCase().includes($filter.target.value.toLowerCase()))
    })

    // this.commonfilter(this.searchValue, this.creditSettingValue, this.sponsersvalue, this.tagsvalue, this.typevalue);
  }
  commonfilter(search = "", credit: any = [], sponser: any = [], tags: any = [], type: any = []) {
    debugger;
    this.store.select(selectAllCourseCatalogSelector).subscribe((res) => {

      // this.courseCatalog = res.filter(f => tags?.some(x => x.item_text?.toLowerCase().includes(f.tag.toLowerCase()))
      this.courseCatalog = res; 
      });
      //  this.courseCatalog= this.courseCatalog.filter((f:any) => f.name.toLowerCase().includes(search.toLowerCase()) || credit?.some(x => x.item_text?.toLowerCase().includes(f.creditsvalue.toLowerCase())) || tags?.some(x => x.item_text?.toLowerCase().incluedes(f.tag.toLowerCase())) || type?.some(x => x.item_text?.toLowerCase().incluedes(f.type.toLowerCase()))|| this.sponsersvalue?.some(x => x.item_text?.toLowerCase().incluedes(f.sponser.toLowerCase())))
    }

  onClick(isCheck: any) {
      if(isCheck == 1) {
      this.tab = 'tab1';
    } else if (isCheck == 2) {
      this.tab = 'tab2';
    } else {
      this.tab = 'tab3';
    }
  }
  resetFilters(){
    this.creditSettingValue=[];
    this.searchValue="";
    this.sponsersvalue=[];
    this.tagsvalue=[];
    this.typevalue=[];
    this.commonfilter();
  }
}
