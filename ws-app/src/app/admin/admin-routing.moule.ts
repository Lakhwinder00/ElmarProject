import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterlistComponent } from './register-user/registerlist/registerlist.component';
import { CourseComponent } from './course/course.component';
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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminComponent} from '../admin/admin.component'
const routes: Routes = [
  { path: '', component: AdminComponent,pathMatch:'full' },
  {
    path:'',
    component: AdminComponent,
    children: [{ path: 'registerlist', component: RegisterlistComponent}]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'user/:id/Edit', component: RegisterUserComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'course', component: CourseComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'transcript', component: TranscriptComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'email', component: EmailComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'roles', component: RolesComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'orders', component: OrdersComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'discussions', component: DiscussionsComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'userassoclinks', component: UserAssocLinksComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'customfields', component: CustomFieldsComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'usergroups', component: UserGroupsComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'addresses', component: AddressesComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'history', component: HistoryComponent }]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'dashboard', component: DashboardComponent }]
  }
 
  
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
