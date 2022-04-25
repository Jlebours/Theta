import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThetaAPIService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get(`http://localhost:3000/services`);
  }

  startService(name: string): Observable<any> {
    return this.http.get(`http://localhost:3000/service/start/${name}`);
  }

  stopService(name: string): Observable<any> {
    return this.http.get(`http://localhost:3000/service/stop/${name}`);
  }

  restartService(name: string): Observable<any> {
    return this.http.get(`http://localhost:3000/service/restart/${name}`);
  }
}