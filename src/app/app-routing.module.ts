import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AboutComponent } from './about/about.component';

const routes: Routes = [{ path: 'dash', component: DashboardComponent},
{ path: 'about', component: AboutComponent},{path:"",component:DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
