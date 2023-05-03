import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import {PaginationComponent} from "../../features/pagination/Pagination";
import {BackButton} from "../../features/backBtn/BackBtn";
import {Table} from "./table/Table";

import './data.css';

const baseUrl = "http://www.filltext.com";
const getData = "&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

function getUrl(chooseData) {
    return `${baseUrl}/?rows=${chooseData}${getData}`;
}

function fetchData(url, setData, page) {
    axios.get(url)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
}

export default function Data() {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const chooseData = location.pathname === '/big-data' ? 50 : 5;
    const url = getUrl(chooseData);

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
