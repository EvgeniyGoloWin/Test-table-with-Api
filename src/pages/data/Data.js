import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import {PaginationComponent} from "../../features/pagination/Pagination";
import {BackButton} from "../../features/backBtn/BackBtn";
import {Table} from "../../features/table/Table";

import './data.css';

export default function Data() {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const baseUrl = "http://www.filltext.com";
    const chooseData = location.pathname === '/big-data' ? 50 : 5
    const url = `${baseUrl}/?rows=${chooseData}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

    const handlePagination = (e, p) => {
        setPage(p)
    }
    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [page]);

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