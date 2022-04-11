import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instance } from './instance';

@Injectable({
  providedIn: 'root',
})
export class ThetaAPIService {
  constructor(private http: HttpClient) {}

  getInstances(): Observable<any> {
    return this.http.get('http://localhost:3000/instances');
  }
}
