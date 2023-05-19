import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sort } from '../../../features/sortBtn/Sort';
import { List } from "./tableList/List";
import { SearchInput } from "../../../features/search/SearchInput";
import {setSearchTerm} from "../../../store/slice/dataSlice";

export const Table = () => {

    const data = useSelector((state) => state.data.data);
    const searchTerm = useSelector((state) => state.data.searchTerm);
    const dispatch = useDispatch();

    const handleSearchTermChange = (e) => {
        dispatch(setSearchTerm(e.target.value.trim()));
    };

    return (
        <>
            <SearchInput searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
            <table className="table">
                <thead>
                <tr>
                    <th>
                        <Sort label='id' text='Id' />
                    </th>
                    <th>
                        <Sort label='firstName' text='FirstName' />
                    </th>
                    <th>
                        <Sort label='lastName' text='LastName' />
                    </th>
                    <th>
                        <Sort label='email' text='Email' />
                    </th>
                    <th>
                        <Sort label='phone' text='Phone' />
                    </th>
                    <th>Address</th>
                </tr>
                </thead>
                <List data={data} searchTerm={searchTerm} />
            </table>
        </>
    );
};
