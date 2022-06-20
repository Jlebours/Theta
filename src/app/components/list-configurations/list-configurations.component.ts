import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Configuration } from 'src/app/models/configuration';
import { ThetaAPIService } from 'src/app/services/theta-api.service';

@Component({
  selector: 'app-list-configurations',
  templateUrl: './list-configurations.component.html',
  styleUrls: ['./list-configurations.component.scss'],
  providers: [MessageService]
})
export class ListConfigurationsComponent implements OnInit {
  items: MenuItem[] = [];
  confs: Configuration[] = [];

  constructor(private router: Router, private thetaService: ThetaAPIService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.thetaService.getConfigurations().subscribe((data) => {
      data.forEach((e: any) => {
        var inst = new Configuration(e.name, e.service)
        this.confs.push(inst);
      })
      this.confs.sort((x, y) =>
        x.service === y.service ? 0 : x? -1 : 1
      );
    })

    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ]
  }

  createService(name: string): void {
    this.thetaService.createService(name).subscribe((data) => {
      console.log("Service created")
      if (data[0].message == "Success") {
        this.messageService.add({severity:'success', summary:'Success', detail:'Your service has been created'});
      }
    })
  }

  deleteService(name: string): void {
    this.thetaService.deleteService(name).subscribe((data) => {
      console.log("Service deleted")
      if (data[0].message == "Success") {
        this.messageService.add({severity:'success', summary:'Success', detail:'Your service has been deleted'});
      }
    })
  }

}
