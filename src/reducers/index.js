import {combineReducers} from '@reduxjs/toolkit'

import addressReducer from './address'
import tasksSlicce from './taskSlice'

const allReducers = combineReducers({
    address: addressReducer,
    tasks: tasksSlicce
})

export default allReducers