import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleModelService {

  readonly baseURL = 'http://localhost:5500/api/samplemodel';

  constructor(private httpClient:HttpClient) { }

  getData () {
    return this.httpClient.get(this.baseURL);
  }

  insertData(data: any){
    return this.httpClient.post('http://localhost:5500/api/samplemodel/add', data);
  }
}
