import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Service } from '../../service';
import { ThetaAPIService } from '../../services/theta-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.scss'],
})

export class ListServicesComponent implements OnInit {
  items: MenuItem[] = [];
  services: Service[] = [];

  constructor(private router: Router, private thetaService: ThetaAPIService) {}

  ngOnInit() {
    // refresh le composant précédent
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.thetaService.getServices().subscribe((data) => {
      data.forEach((e: any) => {
        var inst = new Service(e.name, e.state)
        this.services.push(inst);
      })
    })

    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ]
  }

  startService(name: string): void {
    this.thetaService.startService(name).subscribe((data) => {
      console.log("Service started")
    })
  }

  stopService(name: string): void {
    this.thetaService.stopService(name).subscribe((data) => {
      console.log("Service stopped")
    })
  }

  restartService(name: string): void {
    this.thetaService.restartService(name).subscribe((data) => {
      console.log("Service restarted")
    })
  }
}
