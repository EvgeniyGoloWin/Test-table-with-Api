import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../../pages/Home';
import Data from '../../pages/Data';

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
