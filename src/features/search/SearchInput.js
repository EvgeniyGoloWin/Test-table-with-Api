import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchTerm} from "../../store/slice/dataSlice";


export const SearchInput = () => {
    const searchTerm = useSelector((state) => state.data.searchTerm);
    const dispatch = useDispatch();

    const handleSearchTermChange = (e) => {
        dispatch(setSearchTerm(e.target.value.trim()));
    };
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(setSearchTerm(searchTerm))
    }

    return (
        <form className="input_search" onSubmit={onSubmit}>
            <input
                value={searchTerm}
                autoFocus
                type="text"
                placeholder="search"
                onChange={handleSearchTermChange}
            />
        </form>
    );
};
