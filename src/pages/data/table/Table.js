import React, {useState} from 'react';
import {Sort} from '../../../features/sortBtn/Sort';
import {SearchInput} from "../../../features/search/SearchInput";
import {List} from "./tableList/List";
import {useSelector} from "react-redux";

export const Table = () => {
    const data = useSelector((state) => state.data.data);
    const [searchTerm, setSearchTerm] = useState('');

    return (<>
            <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <table className="table">
                <thead>
                <tr>
                    <th><Sort
                        label='id'
                        text='Id'
                />
                </th>
                <th><Sort
                    label='firstName'
                    text='FirstName'
                /></th>
                <th><Sort
                    label='lastName'
                    text='LastName'
                /></th>
                <th><Sort
                    label='email'
                    text='Email'
                /></th>
                <th><Sort
                    label='phone'
                    text='Phone'
                /></th>
                <th>Address</th>
            </tr>
            </thead>
            <List data={data} searchTerm={searchTerm}/>
        </table>
        </>
    );
};

