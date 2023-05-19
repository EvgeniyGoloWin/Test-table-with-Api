import React from 'react';
import {useDispatch} from 'react-redux';
import {setSearchTerm} from "../../store/slice/dataSlice";

export const SearchInput = ({searchTerm,handleSearchTermChange}) => {
     const dispatch = useDispatch();
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
