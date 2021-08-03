import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";
import { Employee, EmployeeState } from "../types/employee";

const initialState: EmployeeState = {
    employees : []
}

const employeeSlice = createSlice({
    name:'employees',
    initialState,
    reducers: {
        updateEmployees: (state, action) => {
            state.employees = action.payload;
        }
    }
})

export default employeeSlice.reducer
export const { updateEmployees } = employeeSlice.actions

export const getEmployees = () => async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    const response = await api.get<Employee[]>('funcionarios');
    dispatch( updateEmployees(response.data));
}

export const setOnlineStatus = ( employeeId: number, isOnline: boolean) => async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    await api.patch(`/funcionarios/${employeeId}`, {
        online: !isOnline,
    });
    const response = await api.get<Employee[]>('funcionarios');
    dispatch( updateEmployees(response.data));
}



