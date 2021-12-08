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
//import { AppEffect } from '../app/admin/store/app.effect';
//import { appReducer } from '../app/admin/store/app.reducer';
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
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {ChipsModule} from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from'@ngx-formly/primeng'
import { PanelMenuModule } from 'primeng/panelmenu';
import { EditorModule } from 'primeng/editor';
import { TabViewModule } from 'primeng/tabview';
import { AppHomeEffect} from '../app/users/store/home/app.effect'
import {appHomeReducer} from '../app/users/store/home/app.reducer'
//import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { SidebarModule } from 'primeng/sidebar';

import { HomeComponent } from './users/home/home.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppEffect } from './admin/store/app.effect';
import { appReducer} from './admin/store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    EffectsModule.forRoot([AppHomeEffect, AppEffect]),
    StoreModule.forRoot({ apphome: appHomeReducer, app: appReducer }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SocketIoModule,
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
    TabViewModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required',}
      ]
    }),
  ],
  providers: [WebSocketService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
