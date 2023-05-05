import {useEffect, useState} from "react";
import {PaginationComponent} from "../../features/pagination/Pagination";
import {BackButton} from "../../features/backBtn/BackBtn";
import {Table} from "./table/Table";
import {useLocation} from "react-router-dom";
import {fetchData,getUrl} from "../../helpers";

import './data.css';


export default function Data() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const location = useLocation();
    const url = getUrl(location);

    const handlePagination = (e, p) => {
        setPage(p)
    }

    useEffect(() => {
        fetchData(url, page).then(res => setData(res));
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
