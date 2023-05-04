import {useEffect, useState} from "react";
import axios from "axios";
import {PaginationComponent} from "../../features/pagination/Pagination";
import {BackButton} from "../../features/backBtn/BackBtn";
import {Table} from "./table/Table";
import {BASE_URL, CHOOSE_DATA, DATA_PARAMS} from "../../constants/Constants";

import './data.css';

function getUrl(CHOOSE_DATA) {
    return `${BASE_URL}/?rows=${CHOOSE_DATA}${DATA_PARAMS}`;
}

function fetchData(url, setData, page) {
    axios.get(url)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
}

export default function Data() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const url = getUrl(CHOOSE_DATA);

    const handlePagination = (e, p) => {
        setPage(p)
    }

    useEffect(() => {
        fetchData(url, setData, page);
    }, [page, url]);

    return (
        <>
            <BackButton/>
            <Table data={data}
                   setData={setData}
            />
            <div className='input_pagination'>
                <PaginationComponent handlePagination={handlePagination}/>
            </div>
        </>
    );
}
