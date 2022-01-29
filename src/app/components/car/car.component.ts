import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car: Car
  @Output() addToFav = new EventEmitter()

  price: number = Math.floor(Math.random() * 400 + 100)
  days: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  addToFavorites(): void {
    this.addToFav.emit(`${this.car.name}|${this.price * this.days}`)
  }

}
