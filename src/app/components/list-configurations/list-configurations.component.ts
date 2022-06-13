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
    // refresh le composant précédent
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

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

}
