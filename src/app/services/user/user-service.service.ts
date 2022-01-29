import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


 private BASEURL= "http://localhost:2750/";

  constructor(private http: HttpClient) { }
  registerUser(user:any):Observable<any>{  /*http://localhost:2750/user/register */
    return this.http.post(`${this.BASEURL}user/register`,user).pipe(result => result)

  
    

  }

   loginUser(user:any):Observable<any>{  /*http://localhost:2750/user/login  user/login    login*/
    return this.http.post(`${this.BASEURL}user/login`,user).pipe(result => result)

   }

  


    
}


