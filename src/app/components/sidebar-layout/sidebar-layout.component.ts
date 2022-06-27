import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ThetaAPITmplService } from 'src/app/services/theta-api-tmpl.service';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutComponent implements OnInit {
  selectedDevice: any;

  devices: any[] = [];

  constructor(private thetaTmplService: ThetaAPITmplService, private router: Router) {}

  ngOnInit(): void {}

  filterDevices(event: { query: any; }) {
    let filtered : any[] = [];
    let query = event.query;

    this.thetaTmplService.getDevices().subscribe((devices) => {
      var names = devices.map((device: { name: string; }) => device.name)
      for(const name of names) {
        if (name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(name);
        }
      }
      this.devices = filtered;
    })
  }

  deviceDetails(device: string) {
    this.router.navigate(['/device', device])
  }

}
