import {BASE_URL, DATA_PARAMS, DEFAULT_DATA_AMOUNT_BIG, DEFAULT_DATA_AMOUNT_SMALL} from "../constants/Constants";

export function getUrl(location) {
    const CHOOSE_DATA = location.pathname === '/big-data' ? DEFAULT_DATA_AMOUNT_BIG : DEFAULT_DATA_AMOUNT_SMALL;
    return `${BASE_URL}/?rows=${CHOOSE_DATA}${DATA_PARAMS}`;
}