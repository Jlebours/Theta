import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root',
})
export class ThetaAPIService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`/api/v1/services`);
    //return this.http.get<Service[]>(`http://localhost:3000/services`);
  }

  startService(name: string): Observable<any> {
    return this.http.get(`/api/v1/services/start/${name}`);
    //return this.http.get(`http://localhost:3000/start?name=${name}`);
  }

  stopService(name: string): Observable<any> {
    return this.http.get(`/api/v1/services/stop/${name}`);
    //return this.http.get(`http://localhost:3000/stop/${name}`);
  }

  restartService(name: string): Observable<any> {
    return this.http.get(`/api/v1/services/restart/${name}`);
    //return this.http.get(`http://localhost:3000/restart/${name}`);
  }

  enableService(name: string): Observable<any> {
    return this.http.get(`/api/v1/services/enable/${name}`);
    //return this.http.get(`http://localhost:3000/enable/${name}`);
  }

  disableService(name: string): Observable<any> {
    return this.http.get(`/api/v1/services/disable/${name}`);
    //return this.http.get(`http://localhost:3000/disable/${name}`);
  }

  createService(name: string): Observable<any> {
    return this.http.get(`/api/v1/services/create/${name}`);
    //return this.http.get(`http://localhost:3000/create/${name}`);
  }

  deleteService(name: string): Observable<any> {
    return this.http.get(`/api/v1/services/delete/${name}`);
    //return this.http.get(`http://localhost:3000/delete/${name}`);
  }

  getConfigurations(): Observable<any> {
    return this.http.get(`/api/v1/confs`)
    //return this.http.get(`http://localhost:3000/configurations`)
  }
}
