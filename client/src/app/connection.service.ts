import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) {

  }
  getDiscoverMusic() {
    return this.http.get("http://localhost:3001/discover");
  }
}
