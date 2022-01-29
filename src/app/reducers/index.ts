import { carReducer } from "./car.reducers";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
    cars: any
}

export const reducers: ActionReducerMap<AppState, any> = {
    cars: carReducer
}