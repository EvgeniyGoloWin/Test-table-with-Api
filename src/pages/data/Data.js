import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import {PaginationComponent} from "../../features/pagination/Pagination";
import {BackButton} from "../../features/backBtn/BackBtn";
import {SearchInput} from "../../features/search/SearchInput";
import {SortButtonId} from "../../features/sortBtn/SortBtnId";
import {SortButtonFname} from "../../features/sortBtn/SortBtnFname";

import './data.css';
import {DATA_URL} from "../../constants/url";

export default function Data() {
    const location = useLocation();
    const [isHiddenId, setIsHiddenId] = useState(false);
    const [isHiddenFname, setIsHiddenFname] = useState(false);
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const baseUrl = "http://www.filltext.com";
    const chooseData = location.pathname === '/big-data' ? 50 : 5
    const url = `${baseUrl}/?rows=${chooseData}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

    const handlePagination = (e, p) => {
        setPage(p)
    }
    const compareFirstNameAscending = (a, b) => {
        if (a.firstName < b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName) {
            return 1;
        }
        return 0;
    };

    const sortByFirstNameAscending = () => {
        const sortedData = [...data].sort(compareFirstNameAscending);
        setData(sortedData);
        setIsHiddenFname(false);
    };
    const compareFirstNameDescending = (a, b) => {
        if (a.firstName < b.firstName) {
            return 1;
        }
        if (a.firstName > b.firstName) {
            return -1;
        }
        return 0;
    };

    const sortByFirstNameDescending = () => {
        const sortedData = [...data].sort(compareFirstNameDescending);
        setData(sortedData);
        setIsHiddenFname(true);
    };

    const compareIdAscending = (a, b) => {
        return a.id - b.id;
    };
    const sortByIdAscending = () => {
        const sortedData = [...data].sort(compareIdAscending);
        setData(sortedData);
        setIsHiddenId(false);
    };

    const compareIdDescending = (a, b) => {
        return b.id - a.id;
    };
    const sortByIdDescending = () => {
        const sortedData = [...data].sort(compareIdDescending);
        setData(sortedData);
        setIsHiddenId(true);
    };

    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [page]);

    return (
        <>
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <BackButton/>
            <table className="table">
                <thead>
                <tr>
                    <SortButtonId isHiddenId={isHiddenId} sortByIdDescending={sortByIdDescending}
                                  sortByIdAscending={sortByIdAscending}/>
                    <SortButtonFname isHiddenFname={isHiddenFname} sortByFirstNameDescending={sortByFirstNameDescending}
                                     sortByFirstNameAscending={sortByFirstNameAscending}/>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {data.filter(item => item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || item.email.toLowerCase().includes(searchTerm.toLowerCase()) || item.phone.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((item) => (<tr className="item_table" key={item.id + item.firstName}>
                        <td className="cell">{item.id}</td>
                        <td className="cell">{item.firstName}</td>
                        <td className="cell">{item.lastName}</td>
                        <td className="cell">{item.email}</td>
                        <td className="cell">{item.phone}</td>
                        <td className="cell">
                            {item.address.streetAddress}, {item.address.city}, {item.address.state},{" "}
                            {item.address.zip}
                        </td>
                    </tr>))}
                </tbody>
            </table>
            <div className='input_pagination'>
                <PaginationComponent handlePagination={handlePagination}/>
            </div>
        </>
    );
}