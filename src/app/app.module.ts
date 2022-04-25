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

import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';
import { ListInstancesComponent } from './components/list-instances/list-instances.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TelegrafComponent } from './components/telegraf/telegraf.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarLayoutComponent,
    ListInstancesComponent,
    DashboardComponent,
    TelegrafComponent,
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
    ChartModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
