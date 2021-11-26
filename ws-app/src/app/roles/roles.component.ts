import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(
    private fb: FormBuilder) { }
  findroles: any = [];
  systemroles: any = [{ label: 'instructor', value: 'instructor' }, { label: 'sample role', value: 'sample role' }, { label: 'speaker', value: 'speaker' }, { label: 'teacher', value: 'teacher' }];
  ngOnInit(): void {
  }
 rolesform = this.fb.group({})
  filterroles(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.systemroles.length; i++) {
      let role = this.systemroles[i];
      if (role.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(role);
      }
    }
    this.findroles = filtered;
  }
}
