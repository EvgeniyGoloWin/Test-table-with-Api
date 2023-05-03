import React, {useState} from 'react';
import {Sort} from '../../../features/sortBtn/Sort';
import {SearchInput} from "../../../features/search/SearchInput";
import {List} from "./tableList/List";

export const Table = ({
                   data,
                   setData
               }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (<>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <table className="table">
            <thead>
            <tr>
                <th> <Sort
                    label='id'
                    text='Id'
                    data={data}
                setData={setData}
                />
                </th>
                <th><Sort
                    label='firstName'
                    text='FirstName'
                    data={data}
                    setData={setData}
                /></th>
                <th><Sort
                    label='lastName'
                    text='LastName'
                    data={data}
                    setData={setData}
                /></th>
                <th><Sort
                    label='email'
                    text='Email'
                    data={data}
                    setData={setData}
                /></th>
                <th><Sort
                    label='phone'
                    text='Phone'
                    data={data}
                    setData={setData}
                /></th>
                <th>Address</th>
            </tr>
            </thead>
            <List data={data} setData={setData} searchTerm={searchTerm}/>
        </table>
        </>
    );
};

