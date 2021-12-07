import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { addUser, editUser, deleteUser, requestRegistrationList, deletealluser, filterdata } from '../../store/app.action';
import { selectAllRegistrationSelector, selectRegistrationLoading } from '../../store/app.selector';
import { IAppState } from '../../store/app.state'
import { ConfirmationService } from 'primeng/api'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as FileSaver from 'file-saver'
import { state } from '@angular/animations';
import { IRegistration } from '../../app.model';
import { Actions } from '@ngrx/effects';
import { PrimeNGConfig } from 'primeng/api';
let id = 45;

@Component({
  selector: 'app-registerlist',
  templateUrl: './registerlist.component.html',
  styleUrls: ['./registerlist.component.scss']
})
export class RegisterlistComponent implements OnInit {
  title = 'ws-app';
  display: boolean = false;
  submitted: boolean = false;
  userForm = this.fb.group({
    id: [],
    firstName: new FormControl('', [Validators.required]),
    customerMemberId: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  })
  getexcelArray: IRegistration[] = [];
  register: any[] = [];

  loading$: Observable<boolean> = this.store.select(
    selectRegistrationLoading
  );
  constructor(private store: Store<IAppState>,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder) {
  }


  ngOnInit(): void {


    this.store.select(selectAllRegistrationSelector).subscribe(
      (res) =>
        this.register = res
    );
    //this.store.dispatch(requestRegistrationList());
  }
  get f() { return this.userForm.controls; }
  openNew(): void {
    this.display = true;
  }
  deleteSelectedProducts(): void {
    this.store.dispatch(deletealluser())
  }
  hideDialog(): void {
    this.userForm.reset();
    this.display = false;
  }
  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }
    const user = this.userForm.value;
    if (user.id) {
      this.store.dispatch(editUser({ payload: user }))
    } else {
      user.id = id++;
      this.store.dispatch(addUser({ payload: user }))
    }
    this.display = false;
    this.userForm.reset();
  }
  edit(value: any): void {
    this.userForm.patchValue(value)
    this.display = true;
  }
  deleteUser(value: any): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.store.dispatch(deleteUser({ payload: value.id }))
      }
    });
  }
  exportExcel() {
    import("xlsx").then(xlsx => {
      this.store.select(
        selectAllRegistrationSelector
      ).forEach(
        (res) => this.getexcelArray.push(<any>res)
      );
      let data = <any>this.getexcelArray[0];
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  KeyupFunc(event: any) {
    let filter = event.target.value;
    this.store.select(selectAllRegistrationSelector).subscribe((res) =>
      this.register = res.filter((f) => f.customerMemberId.includes(filter)
        || f.firstName.includes(filter)
        || f.lastName.includes(filter) || f.customerMemberId.includes(filter)))
  }


}
