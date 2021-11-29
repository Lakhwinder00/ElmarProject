import { Component, OnInit } from '@angular/core';
import { IUserAssocNotLinked } from '../app.model';

@Component({
  selector: 'app-user-assoc-not-linked',
  templateUrl: './user-assoc-not-linked.component.html',
  styleUrls: ['./user-assoc-not-linked.component.scss']
})
export class UserAssocNotLinkedComponent implements OnInit {

  userAssocNotLinkedList:Array<IUserAssocNotLinked>=[ {type: 'Course', name: 'Lorem Ipsum is simply dummy text of the printing'},
  {name: 'Lorem Ipsum is simply dummy text of the printing', type: 'ScheduledItem'},
  {name: 'Lorem Ipsum is simply dummy text of the printing', type: 'UserGroup'},
  {name: 'Lorem Ipsum is simply dummy text of the printing', type: 'Discussion'},
  {name: 'Lorem Ipsum is simply dummy text of the printing', type: 'RoleTag'},
  {name: 'Lorem Ipsum is simply dummy text of the printing', type: 'User'},
  {name: 'Lorem Ipsum is simply dummy text of the printing', type: 'Registration'},
  {name: 'Lorem Ipsum is simply dummy text of the printing', type: 'MainRole'}];
    courses = [
    {name: 'Course', code: 'Course'},
    {name: 'ScheduledItem', code: 'ScheduledItem'},
    {name: 'UserGroup', code: 'UserGroup'},
    {name: 'Discussion', code: 'Discussion'},
    {name: 'RoleTag', code: 'RoleTag'},
    {name: 'User', code: 'User'},
    {name: 'Registration', code: 'Registration'},
    {name: 'MainRole', code: 'MainRole'}
];
loading:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
