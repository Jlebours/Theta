import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThetaAPIService } from '../../services/theta-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.scss'],
  providers: [MessageService]
})

export class ListServicesComponent implements OnInit {
  items: MenuItem[] = [];
  services: Service[] = [];

  constructor(private router: Router, private thetaService: ThetaAPIService, private messageService: MessageService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.thetaService.getServices().subscribe((data) => {
      data.forEach((e: any) => {
        var inst = new Service(e.name, e.active)
        this.services.push(inst);
      })
      this.services.sort((x, y) =>
        x.state.localeCompare(y.state)
      );
    })

    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ]
  }

  startService(name: string): void {
    this.thetaService.startService(name).subscribe((data) => {
      console.log("Service started")
      if (data[0].message == "Success") {
        this.messageService.add({severity:'success', summary:'Success', detail:'Your service started'});
      }
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
