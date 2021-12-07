import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';
import { ICourse, ICredits, IMemberTypeSettings, IPrerequisties } from '../app.model'
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseform: any = new FormGroup({})
  constructor(private fb: FormBuilder,
    private store: Store<any>,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  model: ICourse | undefined;
  type: any = [{ label: 'Default', value: 'Default'},
    { label: 'Course Instance', value: 'Course Instance' },
    { label: 'Certification', value: 'Certification' }, { label: 'Historic Record', value: 'Historic Record' }, { label: 'Learning Path', value: 'Learning Path' },
    { label: 'Membership Product', value: 'Membership Product' }, { label: 'Bundle', value: 'Bundle' }, { label: 'LiveOnline.SinglePart', value: 'LiveOnline.SinglePart' }]
  registrationlimits: any = [{ label: 'Select', value: null },
    { label: 'Limit to one self registration', value: 'Limit to one self registration' }, { label: 'Once per calendar year', value: 'Once per calendar year' },
    { label: 'Unlimited', value: 'Unlimited' }]
  locale: any[] = [{ label: 'Select', value: null }, { label: 'us', value: 'us' }, { label: 'ca', value: 'ca' }]
  options: FormlyFormOptions = {
    // formState: { awesomeIsForced: false,}
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'type',
      type: 'select',
      id: 'type',
      templateOptions: {
        label: 'Type',
        required: true,
        type: 'select',
        options: this.type,
        valueProp: 'value',
        labelProp: 'label',
      },
      className: "col-4",
    },
    {
      key: 'name',
      type: 'input',
      id: 'name',
      templateOptions: {
        type: 'text',
        label: 'Name',
        placeholder: 'Name',
        description: 'Name',
        required: true,
        className: 'p-inputtext',
      },
      className: "col-4",
    },
    {
      key: 'displayname',
      type: 'input',
      id: 'displayname',
      templateOptions: {
        type: 'text',
        label: 'Display Name',
        placeholder: 'Display Name',
        description: 'Display Name',
        required: true,
        className: 'p-inputtext',
      },
      className: "col-4",
    },
    {
      key: 'customerproductid',
      type: 'input',
      id: 'displayname',
      templateOptions: {
        type: 'text',
        label: 'Customer Product ID ',
        placeholder: 'Customer Product ID',
        description: 'Customer Product ID',
        required: true,
        className: 'p-inputtext',
      },
      className: "col-4",
    },
    {
      key: 'price',
      type: 'input',
      id: 'price',
      templateOptions: {
        type: 'number',
        label: 'Price',
        placeholder: 'Price',
        description: 'Price',
        required: true,
        className: 'p-inputtext',
      },
      className: "col-4",
    },
    {
      key: 'ecommerce',
      type: 'checkbox',
      templateOptions: {
        label: 'Hide in all ecommerce catalogs',
        description: 'Hide in all ecommerce catalogs',
        pattern: 'true',
        required: true,
      },
      className: "col-4 my-auto",
      //validation: {
      //  messages: {
      //    pattern: 'Please accept the terms',
      //  },
      //},
    },
    {
      key: 'IsproductOnly',
      type: 'checkbox',
      templateOptions: {
        label: 'Is product only',
        description: 'Hide in all ecommerce catalogs ',
        pattern: 'true',
        required: true,
      },
      className: "col-4 my-auto",
      //validation: {
      //  messages: {
      //    pattern: 'Please accept the terms',
      //  },
      //},
    },
    {
      key: 'tag',
      type: 'input',
      id: 'tag',
      templateOptions: {
        type: 'number',
        label: 'Tags (0)',
        placeholder: 'Tag',
        description: 'Tag',
        required: true,
        className: 'p-inputtext',
      },
      className: "col-4",
    },
    {
      key: 'userSelfRegistrationLimits',
      type: 'select',
      id: 'userSelfRegistrationLimits',
      templateOptions: {
        label: 'User self registration limits ',
        type: 'select',
        options: this.registrationlimits,
        valueProp: 'value',
        labelProp: 'label',
      },
      className: "col-4",
    },

  
  ]
  fields2: FormlyFieldConfig[] = [{
    key: 'catalogRegisterButtonStrategy',
    type: 'select',
    id: 'catalogRegisterButtonStrategy',
    templateOptions: {
      label: 'Catalog Register Button Strategy',
      required: true,
      type: 'select',
      options: [{ label: 'Buy button link to external URL', value: 'Buy button link to external URL' }],
      valueProp: 'value',
      labelProp: 'label',
    },
    className: "col-3",
  },
    {
      key: 'instructors',
      type: 'select',
      templateOptions: {
        label: 'Instructors (2)',
        multiple: true,
        options: [
          { label: 'User1', value: 'User1' },
          { label: 'User2', value: 'User2' },
        ],
      },
      className: "col-3",
    },
    {
      key: 'catalogRegisterButtonStrategy',
      type: 'select',
      id: 'catalogRegisterButtonStrategy',
      templateOptions: {
        label: 'Catalog Register Button Strategy',
        required: true,
        type: 'select',
        options: [{ label: 'Buy button link to external URL', value: 'Buy button link to external URL' }],
        valueProp: 'value',
        labelProp: 'label',
      },
      className: "col-3",
    },
    {
      key: 'expiration',
      type: 'select',
      id: 'catalogRegisterButtonStrategy',
      templateOptions: {
        label: 'Catalog Register Button Strategy',
        required: true,
        type: 'select',
        options: [{ label: 'Buy button link to external URL', value: 'Buy button link to external URL' }],
        valueProp: 'value',
        labelProp: 'label',
      },
      className: "col-3",
    },
    {
      key: 'expiration',
      type: 'select',
      templateOptions: {
        label: 'Expiration',
        required: true,
        type: 'select',
        options: [{ label: 'None', value: 'None' },
        { label: 'Number of days from initial registration', value: 'Number of days from initial registration' },
        { label: 'Specfic Date/Time', value: 'Specfic Date/Time' }],
        valueProp: 'value',

      },
      className: "col-3",
    },
    {
      key: 'localCountry',
      type: 'select',
      templateOptions: {
        label: 'Locale (Country)',
        required: true,
        type: 'select',
        options: this.locale
      },
      className: "col-3",
    },
    {
      key: 'prefer',
      type: 'select',
      templateOptions: {
        label: 'Preferred Language',
        required: true,
        type: 'select',
        options: [
          { label: 'en', value: 'en' },
          { label: 'fr', value: 'fr' },
        ],
      },
      className: "col-3",
    },
    {
      key: '',
      type: 'input',
      id: 'tag',
      templateOptions: {
        type: 'number',
        placeholder: 'Courses users are required to complete before registering in this course',
        disabled: true,
        className: 'p-inputtext',
      },
      className: "col-5",
    },
    {
      key: 'creditsvalue',
      type: 'checkbox',
      templateOptions: {
        label: 'Credits are end user editable up to max value ',
        pattern: 'true',
        required: true,
      },
      className: "col-6 my-auto",
    },]
  cardfields1: FormlyFieldConfig[] = [
    {
      key: 'PrerequistiesName',
      type: 'input',
      id: 'name',
      templateOptions: {
        type: 'text',
        label: 'Name',
        placeholder: 'Name',
        description: 'Name',
        className: 'p-inputtext',
      },
      className: "col-6",
    },
    {
      key: 'PrerequistiesCreated',
      type: 'input',
      id: 'name',
      templateOptions: {
        type: 'text',
        label: 'Created',
        placeholder: 'Created',
        className: 'p-inputtext',
      },
      className: "col-6",
    },
  ]
  cardfields2: FormlyFieldConfig[] = [
    {
      key: 'creditsvalue',
      type: 'input',
      id: 'name',
      templateOptions: {
        type: 'text',
        label:'Value',
        placeholder: 'Value',
        className: 'p-inputtext',
      },
      className: "col-6",
    },
    {
      key: 'creditstype',
      type: 'input',
      id: 'name',
      templateOptions: {
        type: 'text',
        label: 'Type',
        placeholder: 'Type',
        className: 'p-inputtext',
      },
      className: "col-6",
    },
  ]
  cardfields3: FormlyFieldConfig[] = [
    {
      key: 'memberType',
      type: 'checkbox',
      templateOptions: {
        label: 'Credits are end user editable up to max value ',
        pattern: 'true',
        required: true,
      },
      className: "col-10 my-auto",
    },
  ]
  ngOnInit(): void {
    this.courseform  = this.fb.group({});
  }

  onSubmit() {

  }
}
