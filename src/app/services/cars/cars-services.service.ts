import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Car } from 'src/app/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsServicesService {

  private BASEURL= "http://localhost:2750/";

  constructor(private http: HttpClient) { }
  getAllCars():Observable<any>{  /*http://localhost:2750/car/all*/
    return this.http.get(`${this.BASEURL}car/all`).pipe(map((cars: any) => cars.cars.map((car: any) => {
      return this.createCarObject(car)
    })))
  }

  createCarObject(data: any): Car {
    return new Car(data.name, data.milse_per_gallon, data.cylinders, data.displacement, data.horsepower, data.weight_in_lbs, data.acceleration, data.year, data.origin)
  }

}
