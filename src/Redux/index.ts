import { configureStore, combineReducers } from '@reduxjs/toolkit';
import employeeSlice from './employeeSlice';

const rootReducer = combineReducers({
    employeeSlice,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store