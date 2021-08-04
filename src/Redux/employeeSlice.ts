import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
        },

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

export const createNewEmployee = ( email: string,
                                    password: string,
                                    name: string,
                                    isOnline: boolean,
                                    salary: number,
                                    position: string
) => async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    await api.post('funcionarios', {
        username: email,
        password: password,
        nome: name,
        online: isOnline,
        salario: salary,
        cargo: position
    });

    const response = await api.get<Employee[]>('funcionarios');
    dispatch( updateEmployees(response.data));
}

export const removeEmployee = createAsyncThunk(
    'employee/delete',
    async (
      data: {
        id: number
      },
      { rejectWithValue, dispatch }
    ) => {
      try {
        const { id } = data;
        await api.delete(`/funcionarios/${id}`);

        const response = await api.get<Employee[]>('funcionarios');
        dispatch( updateEmployees(response.data));
        return true;

      } catch (error) {
        alert('Não foi possível deletar o funcionário!');
        return rejectWithValue(error);
      }
    }
  )
