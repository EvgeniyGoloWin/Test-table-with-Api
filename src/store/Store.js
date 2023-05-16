import {configureStore} from "@reduxjs/toolkit";
import dataReducer from "../store/slice/dataSlice";
import sortReducer from "../store/slice/sortSlice"

const store = configureStore({
    reducer: {
        data: dataReducer,
        sort: sortReducer,
    },
});

export default store;

