import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInstancesComponent } from './components/list-instances/list-instances.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TelegrafComponent } from './components/telegraf/telegraf.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path:'telegraf', component: TelegrafComponent },
  { path: "list-instances", component: ListInstancesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
