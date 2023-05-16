import {configureStore} from "@reduxjs/toolkit";
import dataReducer from "../store/slice/dataSlice";

const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});

export default store;

