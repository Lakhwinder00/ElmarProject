import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { CardModule, } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng'
import { PanelMenuModule } from 'primeng/panelmenu';
import { EditorModule } from 'primeng/editor';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
//import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { SidebarModule } from 'primeng/sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { EmailComponent } from './email/email.component';
import { RolesComponent } from './roles/roles.component';
import { OrdersComponent } from './orders/orders.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { UserAssocLinksComponent } from './user-assoc-links/user-assoc-links.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { AddressesComponent } from './addresses/addresses.component';
import { HistoryComponent } from './history/history.component';
import { UserAssocLinkedComponent } from './user-assoc-linked/user-assoc-linked.component';
import { UserAssocNotLinkedComponent } from './user-assoc-not-linked/user-assoc-not-linked.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterlistComponent } from './register-user/registerlist/registerlist.component';
import { UserService } from './services/user.service';
import { CourseComponent } from './course/course.component';
import { MainSidebarMenuComponent } from './main-sidebar-menu/main-sidebar-menu.component';
import { AppEffect } from '../admin/store/app.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer} from './../admin/store/app.reducer'
import { AppAdminRoutingModule } from './admin-routing.moule';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AdminComponent } from './admin.component';
import { TabViewModule } from 'primeng/tabview';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    DashboardComponent,
    TranscriptComponent,
    EmailComponent,
    RolesComponent,
    OrdersComponent,
    DiscussionsComponent,
    UserAssocLinksComponent,
    CustomFieldsComponent,
    UserGroupsComponent,
    AddressesComponent,
    HistoryComponent,
    UserAssocLinkedComponent,
    UserAssocNotLinkedComponent,
    SidebarComponent,
    RegisterUserComponent,
    RegisterlistComponent,
    CourseComponent,
    MainSidebarMenuComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    //EffectsModule.forRoot([AppEffect]),
    TableModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    FileUploadModule,
    HttpClientModule,
    CardModule,
    DialogModule,
    InputTextModule,
    RadioButtonModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    MenubarModule,
    PanelModule,
    CheckboxModule,
    DropdownModule,
    InputMaskModule,
    ChipsModule,
    CalendarModule,
    PanelMenuModule,
    FormlyPrimeNGModule,
    EditorModule,
    FormsModule,
    SidebarModule,
    AutoCompleteModule,
    TabViewModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required', }
      ]
    }),
  ],
   providers: [ConfirmationService],
})
export class AdminModule { }
