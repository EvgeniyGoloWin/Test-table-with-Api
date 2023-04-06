import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../Home';
import SmallData from '../SmallData';
import {BigData} from "../BigData";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/small-data',
        element: <SmallData />,
    },
    {
        path: '/big-data',
        element: <BigData />,
    }
]);
