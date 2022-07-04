import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThetaAPITmplService {

  constructor(private http: HttpClient) { }

  getDevices(): Observable<any> {
    //return this.http.get(`http://localhost:10100/devices`);
    return this.http.get(`http://localhost:3000/devices`);
  }

  getInfosDevice(device: string): Observable<any> {
    //return this.http.get(`http://localhost:10100/devices/${device}`);
    return this.http.get(`http://localhost:3000/AMIR1`);
  }
}
