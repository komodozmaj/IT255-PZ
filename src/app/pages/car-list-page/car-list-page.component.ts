import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-car-list-page',
  templateUrl: './car-list-page.component.html',
  styleUrls: ['./car-list-page.component.scss']
})
export class CarListPageComponent implements OnInit {

  cars: any[]

  constructor(private store: Store<AppState>) {
    this.store.select("cars").subscribe((result: any) => {
      this.cars = result
    })
  }

  ngOnInit(): void {
  }

}
