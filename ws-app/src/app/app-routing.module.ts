import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../app/users/home/home.component';
import { AdmincomponentComponent } from './admin/admincomponent.component';
//import { AdmincomponentComponent } from './admin/admincomponent.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
   { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
