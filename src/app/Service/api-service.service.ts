import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient : HttpClient) { }

  getUser(githubUsername: any) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`).pipe(catchError(this.errorHandel));
  }

  getRepos(githubUsername: any, page:number = 1, perPage:number =10):Observable<any>{
    const params = new HttpParams().set('page',page.toString()).set('per_Page', perPage.toString());

    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`,{params })
    .pipe(catchError(this.errorHandel));
  }


  private errorHandel( error :any){

    console.log('Api Error',error)

    return throwError('An a Error Occurred. Please try again sometime later.')

  }


}
