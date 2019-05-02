import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./type";

export function dispatchToReducer(type, data) {
    return {
        type,
        data
    }
}


export function addition() {
    return (dispatch, getState) => {
        dispatch(dispatchToReducer(INCREMENT_COUNTER, 1))
    }
}
export function subtraction() {
    return (dispatch, getState) => {
        dispatch(dispatchToReducer(DECREMENT_COUNTER, 1))
    }
}
export function removeAmount() {
    return (dispatch, getState) => {
        dispatch(dispatchToReducer(DECREMENT_COUNTER, 1))
    }
}