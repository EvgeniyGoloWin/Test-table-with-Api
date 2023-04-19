import React from 'react';
import sortDown from '../../assets/icon/sort_ascending_icon.png';
import sortUp from '../../assets/icon/sort_descending_icon.png';

export const SortButtonId = ({ sortByIdAscending,sortByIdDescending, isHiddenId }) => {
    return (
        <th>Id {isHiddenId ? (<img onClick={() => {
            sortByIdAscending();
        }} src={sortUp}/>)
        :
        (<img onClick={() => {
            sortByIdDescending();
        }} src={sortDown}/>)}
    </th>
    );
};
