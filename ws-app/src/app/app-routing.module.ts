import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/users/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardModule } from './admin/dashboard/dashboard.module';
import { AdminLayoutComponent } from './shared/admin-layout/layout/admin-layout.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CourseCatalogsComponent } from './users/course-catalogs/course-catalogs.component';
import { PamedFeaturedComponent } from './users/pamed-featured/pamed-featured.component';


DashboardModule

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'home', component: PamedFeaturedComponent
      },
      {
        path: 'coursecatalogs', component: CourseCatalogsComponent
      },
      { path: 'search', component: HomeComponent },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
