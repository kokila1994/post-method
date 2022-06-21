import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  header: any
  constructor(private http: HttpClient) { }
  createData(form: any) {
    let url = environment.apiDomain + "api/users";
    return this.http.post(url, form)
  }
  readData() {
    this.header = this.getHeaders();

    // let url = environment.apiGet + 'api/User/validateUserName/{username}';
    let url = environment.apiGet + 'api/User/validateUserName/suresh';
    return this.http.get(url, this.header);
  }

  getHeaders() {
    const headers = new HttpHeaders();
    headers.set('Accept', '*/*');
    headers.set('Content-Type', 'application/json')
  }
}

