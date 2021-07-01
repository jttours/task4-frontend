import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountOperationsService {
  findAccount(value: any) {
    throw new Error('Method not implemented.');
  }

  readonly baseURL = 'http://localhost:5500/api/operations';

  constructor(private httpClient:HttpClient) { }

  getData (accountNumber: number) {
    return this.httpClient.get(`http://localhost:5500/api/operations/`+accountNumber);
  }

  insertData(data: any){
    return this.httpClient.post('http://localhost:5500/api/operations/add', data);
  }
}