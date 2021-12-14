import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/users/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { PamedFeaturedComponent } from './users/pamed-featured/pamed-featured.component';
//import { AdmincomponentComponent } from './admin/admincomponent.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'search', component: HomeComponent },
      {
        path: 'home', component: PamedFeaturedComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
