import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Device } from '../models/device';
import { ThetaAPITmplService } from '../services/theta-api-tmpl.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceResolver implements Resolve<Device> {
  constructor(private thetaTmplService: ThetaAPITmplService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Device> {
    return this.thetaTmplService.getInfosDevice(route.paramMap.get('device')!);
  }
}
