import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MenuItem, SortEvent } from 'primeng/api';
import { ThetaAPIService } from '../../services/theta-api.service';
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
  //datasource: Service[] = [];
  services: Service[] = [];

  /* totalRecords!: number;

  cols: any[] = [];

  loading = false; */

  constructor(private thetaService: ThetaAPIService, private messageService: MessageService) {}

  ngOnInit() {
    /* this.thetaService.getServices().subscribe((data) => {
      this.datasource = data
      this.totalRecords = this.datasource.length;
    }) */
    /* this.loading = true; */

    this.thetaService.getServices().subscribe((data) => {
      this.services = data
      this.services.sort((x, y) =>
        x.active.localeCompare(y.active)
      );
    })

    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ]
  }

  /* loadServices(event: LazyLoadEvent) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
        if (this.datasource) {
            this.services = this.datasource.slice(event.first, (event.first! + event.rows!));
            this.loading = false;
        }
    }, 500);
    console.log(this.services)
  } */

  startService(name: string): void {
    this.thetaService.startService(name).subscribe((data) => {
      console.log("Service started")
      /* if (data[0].message == "Success") {
        this.messageService.add({severity:'success', summary:'Success', detail:'Your service started'});
      } */
      this.updateServices()
    })
  }

  stopService(name: string): void {
    this.thetaService.stopService(name).subscribe((data) => {
      console.log("Service stopped")
    })
    this.updateServices()
  }

  restartService(name: string): void {
    this.thetaService.restartService(name).subscribe((data) => {
      console.log("Service restarted")
    })
    this.updateServices()
  }

  enableService(name: string): void {
    this.thetaService.enableService(name).subscribe((data) => {
      console.log("Service enabled")
    })
    this.updateServices()
  }

  disableService(name: string): void {
    this.thetaService.disableService(name).subscribe((data) => {
      console.log("Service disabled")
    })
    this.updateServices()
  }

  updateServices(): void {
    this.thetaService.getServices().subscribe((data) => {
      this.services = data
      this.services.sort((x, y) =>
        x.active.localeCompare(y.active)
      );
    })
  }

}
