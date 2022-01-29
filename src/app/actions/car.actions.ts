import { Action } from "@ngrx/store";

export const ADD_CAR = "ADD_CAR"
export const REMOVE_CAR = "REMOVE_CAR"

export class AddCar implements Action {
    readonly type = ADD_CAR

    constructor(public payload: {}) { }
}

export class RemoveCar implements Action {
    readonly type = REMOVE_CAR

    constructor(public payload: number) { }
}

export type Actions = AddCar | RemoveCar