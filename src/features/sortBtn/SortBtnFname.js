import React from 'react';
import sortDown from '../../assets/icon/sort_ascending_icon.png';
import sortUp from '../../assets/icon/sort_descending_icon.png';

export const SortButtonFname = ({ sortByFirstNameAscending,sortByFirstNameDescending, isHiddenFname }) => {
    return (
        <th>FirstName {isHiddenFname ? (<img onClick={() => {
                sortByFirstNameAscending();
            }} src={sortUp}/>)
            :
            (<img onClick={() => {
                sortByFirstNameDescending();
            }} src={sortDown}/>)}
        </th>
    );
};
