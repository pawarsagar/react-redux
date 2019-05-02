import * as types from './type'



function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        }
        else {
            return state
        }
    }
}



const initialState = {

    value: 0,

}

export const addingReducer = createReducer(initialState, {
    [types.INCREMENT_COUNTER](state, action) {
        console.log(action, '<------ actios');

        return {
            ...state,
            value: state.value + action.data
        }
    },
    [types.DECREMENT_COUNTER](state, action) {
        return {
            ...state,
            value: state.value - action.data
        }
    },
    [types.REMOVE_DATA](state, action) {
        return {

            value: 0
        }
    },


})