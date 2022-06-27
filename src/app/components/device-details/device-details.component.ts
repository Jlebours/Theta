import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/device';
import { ThetaAPITmplService } from 'src/app/services/theta-api-tmpl.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {
  device! : any

  constructor(private thetaTmplService: ThetaAPITmplService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.device = data['device'][0]
    })
  }
}
