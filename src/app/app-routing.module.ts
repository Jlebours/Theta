import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TelegrafComponent } from './components/telegraf/telegraf.component';


const routes: Routes = [
  { path: "dashboard",
    component: DashboardComponent,
    children: [
    {
      path: 'telegraf',
      component: TelegrafComponent,
      children: [
        {
          path: 'services',
          component: ListServicesComponent,
        }
      ]},
  ]},
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
