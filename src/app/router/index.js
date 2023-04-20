import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../../pages/home/Home';
import Data from '../../pages/data/Data';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/small-data',
        element: <Data />,
    },
    {
        path: '/big-data',
        element: <Data />,
    }
]);
