import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsServicesService {

  private BASEURL= "http://localhost:2750/";

  constructor(private http: HttpClient) { }
  getAllCars():Observable<any>{  /*http://localhost:2750/car/all*/
    return this.http.get(`${this.BASEURL}car/all`).pipe(map(CarsServicesService))

  
    

  }

}
