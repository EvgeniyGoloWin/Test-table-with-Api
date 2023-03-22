import {useEffect, useState} from "react";
import axios from "axios";
import sortUp from './sort_ascending_icon.png';
import sortDown from './sort_descending_icon.png'

import './App.css';


export default function App() {
    const [data, setData] = useState([]);
    const baseUrl = "http://www.filltext.com";
    const url = `${baseUrl}/?rows=10&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

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
    };


    const compareIdAscending = (a, b) => {
        return a.id - b.id;
    };
    const sortByIdAscending = () => {
        const sortedData = [...data].sort(compareIdAscending);
        console.log(sortedData, '1-2')
        setData(sortedData);
    };

    const compareIdDescending = (a, b) => {
        return b.id - a.id;
    };
    const sortByIdDescending = () => {
        const sortedData = [...data].sort(compareIdDescending);
        console.log(sortedData, '2-1')
        setData(sortedData);
    };


    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);

    return (<table className="table">
            <thead>
            <tr>
                <th
                >Id <img onClick={sortByIdAscending} src={sortUp}/>
                    <img onClick={sortByIdDescending} src={sortDown}/>
                </th>
                <th>FirstName <img onClick={sortByFirstNameAscending} src={sortUp}/><img
                    onClick={sortByFirstNameDescending} src={sortDown}/></th>
                <th>LastName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr className="item_table" key={item.id + item.firstName}>
                    <td className="cell">{item.id}</td>
                    <td className="cell">{item.firstName}</td>
                    <td className="cell">{item.lastName}</td>
                    <td className="cell">{item.email}</td>
                    <td className="cell">{item.phone}</td>
                    <td className="cell">
                        {item.address.streetAddress}, {item.address.city}, {item.address.state},{" "}
                        {item.address.zip}
                    </td>
                </tr>
            ))}
            </tbody>
            {/*<input*/}
            {/*    value={searchTerm}*/}
            {/*    autoFocus*/}
            {/*    type='text'*/}
            {/*    placeholder='search'*/}
            {/*    onChange={(e) => setSearchTerm(e.target.value)}*/}
            {/*/>*/}
        </table>
    );
}