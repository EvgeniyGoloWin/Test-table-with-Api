import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
    "data/fetchData",
    async (url) => {
        const response = await axios.get(url);
        return response.data;
    }
);

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        toggleSortDirection: (state, {payload}) => {
            const compareValues = (a, b) => {
                if (a[payload.label] < b[payload.label]) {
                    return payload.isAscending ? -1 : 1;
                }
                if (a[payload.label] > b[payload.label]) {
                    return payload.isAscending  ? 1 : -1;
                }
                return 0;
            };
            state.data = [...state.data].sort(compareValues)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                console.log(action.payload)
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});
export const {toggleSortDirection} = dataSlice.actions;
export default dataSlice.reducer;
