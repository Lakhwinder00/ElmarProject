import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from '../app/register-user/register-user.component';
import { RegisterlistComponent } from '../app/register-user/registerlist/registerlist.component';
import { CourseComponent } from '../app/course/course.component';
import { TranscriptComponent } from '../app/transcript/transcript.component';
import { EmailComponent } from '../app/email/email.component';
import { RolesComponent } from '../app/roles/roles.component';
import { OrdersComponent } from '../app/orders/orders.component';
import { DiscussionsComponent } from '../app/discussions/discussions.component';
import { UserAssocLinksComponent } from '../app/user-assoc-links/user-assoc-links.component';
import { CustomFieldsComponent } from '../app/custom-fields/custom-fields.component';
import { UserGroupsComponent } from '../app/user-groups/user-groups.component';
import { AddressesComponent } from '../app/addresses/addresses.component';
import { HistoryComponent } from '../app/history/history.component';



const routes: Routes = [
  { path: 'registerlist', component: RegisterlistComponent },
  { path: 'User/:id/Edit', component: RegisterUserComponent },
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
  { path: 'history', component: HistoryComponent },
  { path: '**', redirectTo: 'registerlist' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
