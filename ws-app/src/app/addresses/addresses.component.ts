import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  addressList:any=[ {type: 'Course', name: 'Lorem Ipsum is simply dummy text of the printing'},
  {name: 'Lorem Ipsum is simply dummy text of the printing', type: 'ScheduledItem'},
  {name: 'Lorem Ipsum is simply dummy text of the printing', type: 'UserGroup'}
 
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
