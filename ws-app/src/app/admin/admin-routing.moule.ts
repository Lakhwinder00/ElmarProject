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
import { AdminLayoutComponent } from '../shared/admin-layout/layout/admin-layout.component';
const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [{ path: 'registerlist', component: RegisterlistComponent },
    {path: 'dashboard', component: DashboardComponent,},
    { path: 'user/:id/Edit', component: RegisterUserComponent },
    { path: 'course', component: CourseComponent },
    { path: 'transcript', component: TranscriptComponent },
    { path: 'email', component: EmailComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'discussions', component: DiscussionsComponent },
    { path: 'userassoclinks', component: UserAssocLinksComponent },
    { path: 'customfields', component: CustomFieldsComponent },
    { path: 'usergroups', component: UserGroupsComponent },
    { path: 'addresses', component: AddressesComponent },
    { path: 'history', component: HistoryComponent }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
