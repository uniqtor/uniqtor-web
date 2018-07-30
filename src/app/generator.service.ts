import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private http: HttpClient) { }

  getSingleUuid() {
    return this.http.get('/server/v1/generator/uuid');
  }

  getNUuids(n: number) {
    return this.http.get('/server/v1/generator/uuid/'+ n);
  }

  getNMongoDbIds(n: number) {
    return this.http.get('/server/v1/generator/mongodbid/'+ n);
  }
}
