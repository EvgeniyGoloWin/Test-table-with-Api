import React from 'react';

export const SearchInput = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='input_search'>
            <input
                value={searchTerm}
                autoFocus
                type='text'
                placeholder='search'
                onChange={(e) => setSearchTerm(e.target.value.trim())}
            />
        </div>
    )
}
