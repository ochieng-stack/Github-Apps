import { CLIENT_ID, CLIENT_SECRET } from './credentials/githubcred';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

  // for github profile
  public getProfile(searchQuery):Observable<any>{
    let dataUrl = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
     return this.httpClient.get<any>(dataUrl).pipe(
       
     );
  }

  // for github repos
   
  public getrepos(searchQuery):Observable<any> {
    let dataUrl = `https://api.github.com/users/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<any[]>(dataUrl).pipe(
    
    );
  }

  public handleErrors(error:HttpErrorResponse) {
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      // client side error
      errorMessage = `MESSAGE : ${error.error.message}`;
    }
    else{
      // server side error
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
