import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../node_modules/@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class CompressorService {

  constructor(private http: HttpClient) { }

  getUrlDetails(urlId: string) {
    return this.http.get('https://uniqtor-backbone.herokuapp.com/v1/tinyurls/' + urlId);
  }

  generateTinyUrl(request) {
    let body = JSON.stringify(request);
    return this.http.post('https://uniqtor-backbone.herokuapp.com/v1/tinyurls', body, httpOptions)
  }
}
