import React, { useState } from 'react';
import sortDown from '../../assets/icon/sort_ascending_icon.png';
import sortUp from '../../assets/icon/sort_descending_icon.png';

export const Sort = ({ data, setData, label, text }) => {
    const [isAscending, setIsAscending] = useState(true);

    const compareValues = (a, b) => {
        if (a[label] < b[label]) {
            return isAscending ? -1 : 1;
        }
        if (a[label] > b[label]) {
            return isAscending ? 1 : -1;
        }
        return 0;
    };

    const sortData = () => {
        const sortedData = [...data].sort(compareValues);
        setData(sortedData);
        setIsAscending(!isAscending);
    };

    return (
        <>
            {text}{' '}
            {isAscending ? (
                <img onClick={sortData} src={sortUp} />
            ) : (
                <img onClick={sortData} src={sortDown} />
            )}
        </>
    );
};
