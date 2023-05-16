import {useEffect, useState} from "react";
import { PaginationComponent } from "../../features/pagination/Pagination";
import { BackButton } from "../../features/backBtn/BackBtn";
import { Table } from "./table/Table";
import { useLocation } from "react-router-dom";
import { getUrl} from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchData} from "../../store/slice/dataSlice";

import "./data.css";


export default function Data() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const location = useLocation();
    const url = getUrl(location);
    const handlePagination = (e, p) => {
        setPage(p)
    }

    useEffect(() => {
        dispatch(fetchData(url));
    }, [dispatch, url,page]);

    return (
        <>
            <BackButton />
            <Table />
            <div className="input_pagination">
                <PaginationComponent handlePagination={handlePagination} />
            </div>
        </>
    );
}
