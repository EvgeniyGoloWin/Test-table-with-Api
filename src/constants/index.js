import {Home} from "../pages/home/Home";
import Data from "../pages/data/Data";

export const BASE_URL = "http://www.filltext.com";
export const DATA_PARAMS = "&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
export const DEFAULT_DATA_AMOUNT_SMALL = 5;
export const DEFAULT_DATA_AMOUNT_BIG = 50;

export const homeRoute = {
    path: '/',
    element: <Home />,
};

export const smallDataRoute = {
    path: '/small-data',
    element: <Data />,
};

export const bigDataRoute = {
    path: '/big-data',
    element: <Data />,
};

