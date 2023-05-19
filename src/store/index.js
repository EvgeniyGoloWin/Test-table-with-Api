import {configureStore} from "@reduxjs/toolkit";
import dataReducer from "../store/slice/dataSlice";

const index = configureStore({
    reducer: {
        data: dataReducer,
    },
});

export default index;

