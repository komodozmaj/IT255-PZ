import * as CarActions from "../actions/car.actions"

const initState: [] = []

export function carReducer(state: [] = initState, action: CarActions.Actions) {
    switch(action.type) {
        case CarActions.ADD_CAR:
            return [...state, action.payload]
        case CarActions.REMOVE_CAR:
            
            return [...state, action.payload]
        default:
            return [...state]
    }
}