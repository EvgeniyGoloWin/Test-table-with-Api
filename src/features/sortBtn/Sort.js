// import React, { useState } from 'react';
// import sortDown from '../../assets/icon/sort_ascending_icon.png';
// import sortUp from '../../assets/icon/sort_descending_icon.png';
//
// export const Sort = ({ data, setData, label, text }) => {
//     const [isAscending, setIsAscending] = useState(true);
//
//     const compareValues = (a, b) => {
//         if (a[label] < b[label]) {
//             return isAscending ? -1 : 1;
//         }
//         if (a[label] > b[label]) {
//             return isAscending ? 1 : -1;
//         }
//         return 0;
//     };
//
//     const sortData = () => {
//         const sortedData = [...data].sort(compareValues);
//         setData(sortedData);
//         setIsAscending(!isAscending);
//     };
//
//     return (
//         <>
//             {text}{' '}
//             {isAscending ? (
//                 <img onClick={sortData} src={sortUp} />
//             ) : (
//                 <img onClick={sortData} src={sortDown} />
//             )}
//         </>
//     );
// };
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import sortDown from '../../assets/icon/sort_ascending_icon.png';
import sortUp from '../../assets/icon/sort_descending_icon.png';
import {toggleSortDirection} from "../../store/slice/dataSlice";

export const Sort = ({label, text}) => {
    const [isAscending,setIsAscending] = useState(true)
    //const isAscending = useSelector((state) => state.sort.isAscending);
    const dispatch = useDispatch();

    const sortData = () => {
        setIsAscending(!isAscending)
        //console.log("Sorting clicked");
        dispatch(toggleSortDirection({label, isAscending}));
        //console.log("IsAscending:", isAscending);
    };
    // useEffect(() => {
    //
    // }, [isAscending])

    return (
        <>
            {text}{' '}
            {isAscending ? (
                <img onClick={sortData} src={sortUp} alt="Sort Up"/>
            ) : (
                <img onClick={sortData} src={sortDown} alt="Sort Down"/>
            )}
        </>
    );
};

