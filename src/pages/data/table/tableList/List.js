import React from 'react';
import {Item} from "../tableItem/Item";
import {useSelector} from "react-redux";

export const List = ({ data }) => {
    const searchTerm = useSelector((state) => state.data.searchTerm);
    return (
        <tbody>
        {data
            .filter((item) => item.firstName.toLowerCase().includes(searchTerm?.toLowerCase()) ||
                item.lastName.toLowerCase().includes(searchTerm?.toLowerCase()) ||
                item.email.toLowerCase().includes(searchTerm?.toLowerCase()) ||
                item.phone.toLowerCase().includes(searchTerm?.toLowerCase())
            )
            .map((item) => (
                <Item item={item}  key={item.id + item.firstName}/>
            ))}
        </tbody>
    );
};

