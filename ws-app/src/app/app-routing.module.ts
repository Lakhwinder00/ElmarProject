import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/users/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardModule } from './admin/dashboard/dashboard.module';
import { AdminLayoutComponent } from './shared/admin-layout/layout/admin-layout.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { PamedFeaturedComponent } from './users/pamed-featured/pamed-featured.component';
//import { AdmincomponentComponent } from './admin/admincomponent.component';
DashboardModule

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '', component: LayoutComponent ,pathMatch:'full',
    children: [
      {
        path: 'home', component: PamedFeaturedComponent
      },
      { path: 'search', component: HomeComponent },
    ]
  },
  // {
  //   path: 'main',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  //   }]

    // {
    //     path: 'departments',
    //     loadChildren: () => import('src/app/features/department/department.module').then(m => m.DepartmentModule),
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: 'employees',
    //     loadChildren: () => import('src/app/features/employees/employees.module').then(m => m.EmployeesModule),
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: 'aboutus',
    //     loadChildren: () => import('src/app/features/aboutus/aboutus.module').then(m => m.AboutUsModule),
    //     canActivate: [AuthGuard]
    // },
    // {
    //     path: 'contactus',
    //     loadChildren: () => import('src/app/features/contactus/contactus.module').then(m => m.ContactUsModule),
    //     canActivate: [AuthGuard]
    // }]
  //},
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
