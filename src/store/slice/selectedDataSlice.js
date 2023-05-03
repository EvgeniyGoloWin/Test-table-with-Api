import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: '',
    reducers: {
        selectData: (state, action) => action.payload,
    },
});

export const { selectData } = dataSlice.actions;
export default dataSlice.reducer;
