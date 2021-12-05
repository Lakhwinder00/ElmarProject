import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SocketIoModule } from 'ngx-socket-io';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffect } from './store/app.effect';
import { appReducer } from './store/app.reducer';
import { WebSocketService } from './web-socket.service';
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
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterlistComponent } from './register-user/registerlist/registerlist.component';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {ChipsModule} from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from'@ngx-formly/primeng'
import { FormControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import {UserService} from '../app/services/user.service';
import { CourseComponent } from './course/course.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { EditorModule } from 'primeng/editor';
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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { UserAssocLinkedComponent } from './user-assoc-linked/user-assoc-linked.component';
import { UserAssocNotLinkedComponent } from './user-assoc-not-linked/user-assoc-not-linked.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { SidebarModule } from 'primeng/sidebar';
import { MainSidebarMenuComponent } from './main-sidebar-menu/main-sidebar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    RegisterlistComponent,
    CourseComponent,
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
    MainSidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SocketIoModule,
    StoreModule.forRoot({ app: appReducer }),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([AppEffect]),
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
    AutoCompleteModule,
    SidebarModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required',}
      ]
    }),
  ],
  providers: [WebSocketService, ConfirmationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
