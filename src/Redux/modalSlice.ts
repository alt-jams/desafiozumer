import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../types/employee";

const initialState: ModalState = {
    isModalOpen: false
}

const modalSlice = createSlice({
    name:'isModalOpen',
    initialState,
    reducers: {
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        }
    }
});

export default modalSlice.reducer
export const { setIsModalOpen } = modalSlice.actions


