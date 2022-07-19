import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThetaAPITmplService {

  constructor(private http: HttpClient) { }

  getDevices(): Observable<any> {
    return this.http.get(`/api/v2/devices`);
    //return this.http.get(`http://localhost:3000/devices`);
  }

  getInfosDevice(device: string): Observable<any> {
    return this.http.get(`/api/v2/devices/${device}`);
    //return this.http.get(`http://localhost:3000/AMIR1`);
  }

  getTemplates(vendor: string, platform: string, fct: string): Observable<any> {
    var Qvendor: string = "";
    var Qplatform: string = "";
    var Qfunction: string = "";
    var QandPlatform: string = "";
    var QandFunction: string = "";
    if (vendor != undefined) {
      Qvendor = `?vendor=${vendor}`
      if (platform != undefined) {
        QandPlatform ="&"
      }
    }
    if (platform != undefined) {
      Qplatform = `?platform=${platform}`
      if (fct != undefined) {
        QandFunction ="&"
      }
    }
    if (fct != undefined) {
      Qfunction = `?function=${fct}`
    }
    return this.http.get(`/api/v2/templates/v2${Qvendor}${QandPlatform}${Qplatform}${QandFunction}${Qfunction}`);
    //return this.http.get(`http://localhost:3000/template`);
  }

  getVendors(): Observable<string[]> {
    return this.http.get<string[]>(`/api/v2/pulsar/vendors`);
    //return this.http.get<string[]>(`http://localhost:3000/vendors`)
  }

  getPlatforms(): Observable<string[]> {
    return this.http.get<string[]>(`/api/v2/pulsar/platforms`);
    //return this.http.get<string[]>(`http://localhost:3000/platforms`)
  }

  getFunctions(): Observable<string[]> {
    return this.http.get<string[]>(`/api/v2/pulsar/functions`);
    //return this.http.get<string[]>(`http://localhost:3000/functions`)
  }

  getTemplate(vendor: string, platform: string, fct: string): Observable<any> {
    return this.http.get(`/api/v2/templates/${vendor}/${platform}/${fct}`);
    //return this.http.get(`http://localhost:3000/template`);
  }

  removeConf(template: string, dir: string, conf: string): Observable<any> {
    return this.http.get(`/api/v2/templates/${template}/remove_conf?dir=${dir}&?conf=${conf}`);
    //return this.http.get(``);
  }

  addConf(template: string, dir: string, conf: string): Observable<any> {
    return this.http.get(`/api/v2/templates/${template}/add_conf?dir=${dir}&?conf=${conf}`);
    //return this.http.get(``);
  }

  getConfs(): Observable<any> {
    return this.http.get(`/api/v2/confs/v2`);
    //return this.http.get(`http://localhost:3000/confs`);
  }

}
