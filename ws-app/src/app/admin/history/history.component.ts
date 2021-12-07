import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyList:any=[{created:'September 23rd 2021, 10:33 pm',eventNames:'MainUserUpdated, EntityInstanceUpdated',name:'new',byUser:'Christopher Cody Cates'}];
  constructor() { }

  ngOnInit(): void {
  }

}
