import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThetaAPIService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    //return this.http.get(`http://localhost:10000/services`);
    return this.http.get(`http://localhost:3000/services`);
  }

  startService(name: string): Observable<any> {
    //return this.http.get(`http://localhost:10000/services/start/${name}`);
    return this.http.get(`http://localhost:3000/start?name=${name}`);
  }

  stopService(name: string): Observable<any> {
    //return this.http.get(`http://localhost:10000/services/stop/${name}`);
    return this.http.get(`http://localhost:3000/stop/${name}`);
  }

  restartService(name: string): Observable<any> {
    //return this.http.get(`http://localhost:10000/services/restart/${name}`);
    return this.http.get(`http://localhost:3000/restart/${name}`);
  }

  createService(name: string): Observable<any> {
    //return this.http.get(`http://localhost:10000/services/create/${name}`);
    return this.http.get(`http://localhost:3000/create/${name}`);
  }

  deleteService(name: string): Observable<any> {
    //return this.http.get(`http://localhost:10000/services/delete/${name}`);
    return this.http.get(`http://localhost:3000/delete/${name}`);
  }

  getConfigurations(): Observable<any> {
    //return this.http.get(`http://localhost:10000/confs`)
    return this.http.get(`http://localhost:3000/configurations`)
  }
}
