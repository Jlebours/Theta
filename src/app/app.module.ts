import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Ajouté
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule }   from '@angular/forms';

import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';
import { ListServicesComponent } from './components/list-services/list-services.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TelegrafComponent } from './components/telegraf/telegraf.component';
import { ListConfigurationsComponent } from './components/list-configurations/list-configurations.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { EditConfigurationComponent } from './components/edit-configuration/edit-configuration.component';
import { EngineComponent } from './components/engine/engine.component';
import { TemplateDetailsComponent } from './components/template-details/template-details.component';
import { ListTemplatesComponent } from './components/list-templates/list-templates.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DeviceResolver } from './resolvers/device.resolver';
import { ThetaAPITmplService } from './services/theta-api-tmpl.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarLayoutComponent,
    ListServicesComponent,
    DashboardComponent,
    TelegrafComponent,
    ListConfigurationsComponent,
    BreadcrumbComponent,
    EditConfigurationComponent,
    EngineComponent,
    TemplateDetailsComponent,
    ListTemplatesComponent,
    DeviceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    AppRoutingModule,
    HttpClientModule,
    // Ajouté
    StyleClassModule,
    RippleModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    AvatarModule,
    TagModule,
    ChartModule,
    ToastModule,
    BreadcrumbModule,
    AutoCompleteModule,
    FormsModule,
  ],
  providers: [
    ThetaAPITmplService,
    DeviceResolver,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
