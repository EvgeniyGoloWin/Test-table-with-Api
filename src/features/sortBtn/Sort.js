import React, { useState} from 'react';
import {useDispatch} from 'react-redux';
import sortDown from '../../assets/icon/sort_ascending_icon.png';
import sortUp from '../../assets/icon/sort_descending_icon.png';
import {toggleSortDirection} from "../../store/slice/dataSlice";

export const Sort = ({label, text}) => {
    const [isAscending,setIsAscending] = useState(true)
    const dispatch = useDispatch();

    const sortData = () => {
        setIsAscending(!isAscending)
        dispatch(toggleSortDirection({label, isAscending}));
    };

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

