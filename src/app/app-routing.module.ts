import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TelegrafComponent } from './components/telegraf/telegraf.component';
import { ListConfigurationsComponent } from './components/list-configurations/list-configurations.component';
import { EditConfigurationComponent } from './components/edit-configuration/edit-configuration.component';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Dashboard',
    },
    component: DashboardComponent,
  },
  {
    path: 'telegraf',
    data: {
      breadcrumb: 'Telegraf',
    },
    component: TelegrafComponent,
    children: [
      {
        path: 'services',
        data: {
          breadcrumb: 'Services',
        },
        component: ListServicesComponent,
      },
      {
        path: 'confs',
        data: {
          breadcrumb: 'Confs',
        },
        component: ListConfigurationsComponent,
        children: [
          /* {
            path: '',
            data: {
              breadcrumb: null,
            },
            component: ListConfigurationsComponent,
          }, */
          {
            path: 'edit-conf',
            data: {
              breadcrumb: 'Edit',
            },
            component: EditConfigurationComponent
          }
        ]
      }
    ]
  },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
