import React from 'react';

export const Item = ({ item }) => {
    return (
        <tr className="item_table" key={item.id + item.firstName}>
            <td className="cell">{item.id}</td>
            <td className="cell">{item.firstName}</td>
            <td className="cell">{item.lastName}</td>
            <td className="cell">{item.email}</td>
            <td className="cell">{item.phone}</td>
            <td className="cell">
                {item.address.streetAddress}, {item.address.city}, {item.address.state},{" "}
                {item.address.zip}
            </td>
        </tr>
    );
};
