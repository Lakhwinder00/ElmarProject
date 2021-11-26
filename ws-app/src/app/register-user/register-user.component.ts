import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';
import { map, switchMap, take } from 'rxjs/operators';
import { IRegistration } from '../app.model';
import { editUser } from '../store/app.action';
import { selectUser } from '../store/app.selector';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  edituserform: any = new FormGroup({});
  model: IRegistration | undefined;
  options: FormlyFormOptions = {
    // formState: { awesomeIsForced: false,}
  };
  locale: any[] = [{ label: 'Select', value: null }, { label: 'us', value: 'us' }, { label: 'ca', value: 'ca' }]
  cities = [
    { label: 'Select', value: null },
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
  ];
  members = [{ label: 'Select', value: null }, { label: 'member', value: 'member' }, { label: 'non member', value: 'non member' }]
  timezone = [{ label: 'Select', value: null }, { label: 'Eastern Time (US and Canada)', value: 'Eastern Time (US and Canada)' }]


  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      id: 'firstName',
      templateOptions: {
        type: 'text',
        label: 'First Name',
        placeholder: 'First Name',
        description: 'First Name',
        required: true,
        className: 'p-inputtext',
      },
      className: "col-6",
    },
    {
      key: 'lastName',
      type: 'input',
      id: 'lastName',
      templateOptions: {
        type: 'text',
        label: 'Last Name',
        placeholder: 'Last Name',
        description: 'First Name',
        required: true,
      },
      className: "col-6",

    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Email',
        description: 'Email',
        required: true,
        className: 'p-inputtext',
      },
      className: "col-6",
    },
    // {
    //   key: 'password',
    //   type: 'input',
    //   templateOptions: {
    //     label: 'Password',
    //     placeholder: 'Password',
    //     type: 'password',
    //     required: true,
    //   },
    //   className: "col-6",
    // },
    {
      key: 'customerMemberId',
      type: 'input',
      templateOptions: {
        label: 'Customer Member ID',
        placeholder: 'Customer Member ID',
        required: true,
      },
      className: "col-6",
    },
    {
      key: 'primeMemberGroup',
      type: 'select',
      templateOptions: {
        label: 'Primary Member Group',
        required: true,
        type: 'select',
        options: this.members,
        valueProp: 'value',
        labelProp: 'label',
      },
      className: "col-6",
    },
    {
      key: 'cities',
      type: 'select',
      templateOptions: {
        label: 'Preferred Language',
        required: true,
        type: 'select',
        options: this.cities
      },
      className: "col-6",
    },
    {
      key: 'locals',
      type: 'select',
      templateOptions: {
        label: 'Preferred Language',
        required: true,
        type: 'select',
        options: this.locale
      },
      className: "col-6",
    },
    {
      key: 'timezone',
      type: 'select',
      templateOptions: {
        label: 'Preferred Language',
        required: true,
        className: 'p-custominputtext',
        type: 'select',
        options: this.timezone
      },
      className: "col-6",
    },
    {
      key: 'dob',
      type: 'input',
      templateOptions: {
        label: 'Date of Birth ',
        required: true,
        className: 'p-custominputtext',
        placeholder: "Start Date",
        type: 'date'
      },
      className: "col-6",
    },
    {
      key: 'organization',
      type: 'input',
      templateOptions: {
        label: 'Organization',
        placeholder: 'Organization',
        type: 'text',
        required: true,
      },
      className: "col-6",
    },
  ];

  constructor(private fb: FormBuilder,
    private store: Store<any>,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }




  ngOnInit(): void {
    this.edituserform = this.fb.group({});
    this.activatedRoute.paramMap.pipe(
      map((data) => {
        return data.get("id");
      }),
      switchMap(data => {
        return this.store.select(
          selectUser(data),
        ).pipe(take(1))
      })
    ).subscribe(data => {
      if (data)
        this.model = { ...data };
      else
        this.router.navigate(["/registerlist"]);
    });
  }

  onSubmit(): void {
    if (this.edituserform.valid && this.model) {
      this.store.dispatch(editUser({ payload: { ...this.edituserform.value, id: this.model.id } }));
      this.router.navigate(["/registerlist"]);
    }
  }
}
