import {configureStore} from '@reduxjs/toolkit'
import allReducers from '../reducers'

let store = configureStore({
    reducer: allReducers
})

export default store