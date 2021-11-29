import { Component, OnInit } from '@angular/core';
import { IUserAssocLinked } from '../app.model';

@Component({
  selector: 'app-user-assoc-linked',
  templateUrl: './user-assoc-linked.component.html',
  styleUrls: ['./user-assoc-linked.component.scss']
})
export class UserAssocLinkedComponent implements OnInit {

  userAssocLinkedList:Array<IUserAssocLinked>=[{email: '',course:'',role:'', type: 'Course'},
  {email: '',course:'',role:'', type: 'ScheduledItem'},
  {email: '',course:'',role:'', type: 'UserGroup'},
  {email: '',course:'',role:'', type: 'Course'},
   
  ];
  systemRoles: any = [{ label: 'instructor', value: 'instructor' }, { label: 'sample role', value: 'sample role' }, { label: 'speaker', value: 'speaker' }, { label: 'teacher', value: 'teacher' }];
   
  constructor() { }

  ngOnInit(): void {
  }

}
