import React from 'react';
import {Item} from "../tableItem/Item";

export const List = ({ data, searchTerm }) => {
    return (
        <tbody>
        {data
            .filter((item) => item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.phone.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item) => (
                <Item item={item}/>
            ))}
        </tbody>
    );
};

