export class Car {

    name: string
    miles_per_gallon: number
    cylinders: number
    displacement: number
    horsepower: number
    weight_in_lbs: number
    acceleration: number
    year: string
    origin: string

    constructor(name: string, miles_per_gallon: number, cylinders: number, displacement: number, horsepower: number, weight_in_lbs: number, acceleration: number, year: string, origin: string) {
        this.name = name
        this.miles_per_gallon = miles_per_gallon
        this.cylinders = cylinders
        this.displacement = displacement
        this.horsepower = horsepower
        this.weight_in_lbs = weight_in_lbs
        this.acceleration = acceleration
        this.year = year
        this.origin = origin
    }
}
