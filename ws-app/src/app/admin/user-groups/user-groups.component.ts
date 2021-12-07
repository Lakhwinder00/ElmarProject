import { Component, OnInit } from '@angular/core';
import { IUserAssocNotLinked, IUserGroups } from '../app.model';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit {
  userGroupList:Array<IUserGroups>=[  
  {userGroup: 'Healthcare Specialists Discussion Group', status: ''},
  ];
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
