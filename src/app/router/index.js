import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import {bigDataRoute, homeRoute, smallDataRoute} from "../../constants";

const routes = [
    homeRoute,
    smallDataRoute,
    bigDataRoute,
];

export const router = createBrowserRouter(routes);
