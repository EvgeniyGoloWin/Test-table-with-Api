import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../../pages/Home';
import SmallData from '../../pages/SmallData';
import {BigData} from "../../pages/BigData";

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
