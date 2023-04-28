import React, {useState} from 'react';
import {Sort} from '../sortBtn/Sort';
import {SearchInput} from "../search/SearchInput";

export const Table = ({
                   data,
                   setData
               }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (<>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <table className="table">
            <thead>
            <tr>
                <th> <Sort
                    label='id'
                    text='Id'
                    data={data}
                setData={setData}
                />
                </th>
                <th><Sort
                    label='firstName'
                    text='FirstName'
                    data={data}
                    setData={setData}
                /></th>
                <th><Sort
                    label='lastName'
                    text='LastName'
                    data={data}
                    setData={setData}
                /></th>
                <th><Sort
                    label='email'
                    text='Email'
                    data={data}
                    setData={setData}
                /></th>
                <th><Sort
                    label='phone'
                    text='Phone'
                    data={data}
                    setData={setData}
                /></th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {data
                .filter((item) => item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.phone.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
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
                ))}
            </tbody>
        </table>
        </>
    );
};

