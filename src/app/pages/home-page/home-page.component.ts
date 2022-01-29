import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from 'src/app/models/car';
import { AppState } from 'src/app/reducers';
import { CarsServicesService } from 'src/app/services/cars/cars-services.service';
import * as CarActions from "../../actions/car.actions"

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cars: Car[] = []

  constructor(private carService: CarsServicesService, private store: Store<AppState>) {
    this.carService.getAllCars().subscribe(result => {
      this.cars = result
    })
  }

  ngOnInit(): void {
  }

  add(data: string) {
    let temp = data.split('|')
    let car = {
      name: temp[0],
      price: parseInt(temp[1])
    }

    this.store.dispatch(new CarActions.AddCar(car))
  }

}
