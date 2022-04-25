import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Instance } from '../../instance';
import { ThetaAPIService } from '../../services/theta-api.service';

@Component({
  selector: 'app-list-instances',
  templateUrl: './list-instances.component.html',
  styleUrls: ['./list-instances.component.scss'],
})

export class ListInstancesComponent implements OnInit {
  items: MenuItem[] = [];
  instances: Instance[] = [];

  constructor(private thetaService: ThetaAPIService) {}

  ngOnInit() {
    this.thetaService.getInstances().subscribe((data) => {
      data.forEach((e: any) => {
        console.log(
          e.name
        )
        var inst = new Instance(e.pid, e.name, e.state)
        this.instances.push(inst);
        console.log(inst)
      });
    });

    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];
  }
}
