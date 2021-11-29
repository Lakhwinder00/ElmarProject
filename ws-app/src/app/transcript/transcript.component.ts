import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api'
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';
import { ITranscript, ITranscriptRange} from '../app.model';
import { IAppState } from '../../app/store/app.state'
@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {

  model: ITranscript | undefined;
  model2: ITranscriptRange | undefined;
  display: boolean = false;
  rangeDateYear: boolean = false;
  transcriptform = this.fb.group({})
  transcriptdaterangeform = this.fb.group({});
  constructor(private store: Store<IAppState>,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder) { }
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [{
    key: 'categoryActiveName',
    type: 'input',
    id: 'categoryActiveName',
    templateOptions: {
      type: 'text',
      label: 'Category 1 Activity Name/Category 2 Activity Description',
      placeholder: 'Category 1 Activity Name/Category 2 Activity Description',
      required: true,
      className: 'p-inputtext',
    },
    className: "col-12",
  },
  {
    key: 'categoryProvidename',
    type: 'input',
    id: 'categoryProvidename',
    templateOptions: {
      type: 'text',
      label: 'Category 1 Provider/Category 2 Resource ',
      placeholder: 'Category 1 Provider/Category 2 Resource ',
      required: true,
      className: 'p-inputtext',
    },
    className: "col-12",
  }, {
    key: 'location',
    type: 'input',
    id: 'location',
    templateOptions: {
      type: 'text',
      label: 'Location',
      placeholder: 'Location',
      className: 'p-inputtext',
    },
    className: "col-12",
  }, {
    key: 'startDate',
    type: 'input',
    templateOptions: {
      label: 'Start Date',
      required: true,
      className: 'p-custominputtext',
      placeholder: "Start Date",
      type: 'date'
    },
    className: "col-6",
  }, {
    key: 'completionDate',
    type: 'input',
    templateOptions: {
      label: 'Completion Date',
      required: true,
      className: 'p-custominputtext',
      placeholder: "Completion Date",
      type: 'date'
    },
    className: "col-6",
  }, {
    key: 'creditCardType',
    type: 'select',
    templateOptions: {
      label: 'Credit Category Type',
      type: 'select',
      options: [{ label: 'Select', value: null }, { label: 'AMA PRA Category 1 Credits', value: 'AMA PRA Category 1 Credits' }, { label: 'AMA PRA Category 2 Credits', value: 'AMA PRA Category 2 Credits' }, { label: 'AOA Category 1-A Hours', value: 'AOA Category 1-A Hours' }, { label: 'AOA Category 1-B Hours', value: 'AOA Category 1-B Hours' }],
      valueProp: 'value',
      labelProp: 'label',
    },
    className: "col-6",
  }, {
    key: 'riskHours',
    type: 'input',
    id: 'riskHours',
    templateOptions: {
      type: 'number',
      label: 'Patient Safety/ Risk Management Hours',
      placeholder: 'Patient Safety/ Risk Management Hours',
      className: 'p-inputtext',
    },
    className: "col-12",
  }, {
    key: 'childAbuse',
    type: 'input',
    id: 'childAbuse',
    templateOptions: {
      type: 'number',
      label: 'Child Abuse Hours',
      placeholder: 'Child Abuse Hours',
      className: 'p-inputtext',
    },
    className: "col-12",
  }, {
    key: 'Opioids',
    type: 'input',
    id: 'Opioids',
    templateOptions: {
      type: 'number',
      label: 'Opioids Hours',
      placeholder: 'Opioids Hours',
      className: 'p-inputtext',
    },
    className: "col-12",
  }]
  field: FormlyFieldConfig[] = [{
      key: 'creditCardType',
      type: 'select',
      templateOptions: {
        label: 'Credit Category Type',
        type: 'select',
        options: [{ label: 'AnyTime', value: 'AnyTime' }, { label: 'AMA PRA Category 1 Credits', value: 'AMA PRA Category 1 Credits' }, { label: 'AMA PRA Category 2 Credits', value: 'AMA PRA Category 2 Credits' }, { label: 'AOA Category 1-A Hours', value: 'AOA Category 1-A Hours' }, { label: 'AOA Category 1-B Hours', value: 'AOA Category 1-B Hours' }],
        valueProp: 'value',
        labelProp: 'label',
      },
      className: "col-12",
    },{
      key: 'startDate',
      type: 'input',
      templateOptions: {
        label: 'Start Date',
        required: true,
        className: 'p-custominputtext',
        placeholder: "Start Date",
        type: 'date'
      },
      className: "col-6",
    }, {
      key: 'startTime',
      type: 'input',
      templateOptions: {
        label: 'Start Time',
        className: 'p-custominputtext',
        placeholder: "Start Date",
        type: 'time'
      },
      className: "col-6",
    },
     {
      key: 'completionDate',
      type: 'input',
      templateOptions: {
        label: 'End Date',
        className: 'p-custominputtext',
        placeholder: "Start Date",
        type: 'date'
      },
      className: "col-6",
    }, {
      key: 'completionTime',
      type: 'input',
      templateOptions: {
        label: 'End Time',
        required: true,
        className: 'p-custominputtext',
        placeholder: "Start Date",
        type: 'time'
      },
      className: "col-6",
    }]

  get f() { return this.transcriptform.controls; }
  openNew(): void {
    this.display = true;
  }
  openRageDate() {
    this.rangeDateYear = true;
  }
  ngOnInit(): void {
  }
  dialogbox(): void {

  }
  onSubmit(): void {

  }

}
