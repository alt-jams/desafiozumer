import { configureStore, combineReducers } from '@reduxjs/toolkit';
import employeeSlice from './employeeSlice';
import modalSlice from './modalSlice';

const rootReducer = combineReducers({
    employeeSlice,
    modalSlice,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store