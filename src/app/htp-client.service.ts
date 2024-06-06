import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environemnt } from './environments/enironment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HtpClientService {

  env = environemnt;
  constructor(
    private httpClient: HttpClient
  ) {
    console.log(this.env);
    }

    getCall(URL: string){
      return this.httpClient.get(`${this.env.apiEndPoint}${URL}`).pipe(
        catchError(this.errorHandler)
      )
    }
    postCall(){}

    private errorHandler( error: HttpErrorResponse){
      if(error?.status == 400){
        return throwError(()=>
          new Error('Pleaes send the expected payload.'))
      }else if(error?.status == 500){
        return throwError(()=>
          new Error('Something went wrong. Please try after sometime.'))
      }

      return throwError(()=>
        new Error('Something went wrong. Please contact to admin.'))

    }
}
