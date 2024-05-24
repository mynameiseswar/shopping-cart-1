import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
    }

    getCall(URL: string){
      return this.httpClient.get(URL);
    }
    postCall(){}
}
