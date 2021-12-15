import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
 
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
 
 

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,ChartModule,CardModule,MessageModule 
  ],
  declarations: [] 
})
export class DashboardModule { }