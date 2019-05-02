import { combineReducers, } from 'redux'


import { addingReducer } from './addReducer';



const reducer = combineReducers({
    add: addingReducer

})
export default reducer