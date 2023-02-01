import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  constructor(public http: HttpClient) { }

  async postMusic(data: any): Promise<Observable<any>> {
    return this.http.post(`${environment.url}/`, data);
  }

  async getMusic(id: any): Promise<Observable<any>> { 
    return this.http.get(`${environment.url}/` + id);
  }

  async getMusics(): Promise<Observable<any>> { 
    return this.http.get(`${environment.url}/`);
  }
  
}
