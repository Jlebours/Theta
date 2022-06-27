import { Component, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TelegrafComponent } from './components/telegraf/telegraf.component';
import { ListConfigurationsComponent } from './components/list-configurations/list-configurations.component';
import { EditConfigurationComponent } from './components/edit-configuration/edit-configuration.component';
import { EngineComponent } from './components/engine/engine.component';
import { TemplateDetailsComponent } from './components/template-details/template-details.component';
import { ListTemplatesComponent } from './components/list-templates/list-templates.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DeviceResolver } from './resolvers/device.resolver';
import { Device } from './models/device';

myDevice: Device

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
  {
    path: 'engine',
    data: {
      breadcrumb: 'Engine'
    },
    component: EngineComponent,
    children: [
      {
        path: 'templates',
        data: {
          breadcrumb: 'Templates',
        },
        component: ListTemplatesComponent,
        children: [
          {
            path: 'template-details',
            data: {
              breadcrumb: 'TemplateDetails',
            },
            component: TemplateDetailsComponent
          }
        ]
      },
    ]
  },
  {
    path: 'device/:device',
    data: {
      breadcrumb: 'Device',
    },
    component: DeviceDetailsComponent,
    resolve: {
      device: DeviceResolver
    }
  },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
