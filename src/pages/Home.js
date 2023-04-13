import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import SmallData from "./SmallData";
import {BigData} from "./BigData";

import './home.css';

export const Home = () => {
    const [selectedData, setSelectedData] = useState('');

    const handleDataSelection = (event) => {
        setSelectedData(event.target.value);
    };

    return (
        <div className='nav'>
            <h2> Choose your data</h2>
            <nav>
                <div className='link'>
                    <Link to="/small-data" onClick={() => setSelectedData('small')}>Small DATA</Link>
                    <Link to="/big-data" onClick={() => setSelectedData('big')}>Big DATA</Link>
                </div>
            </nav>
            {selectedData === 'small' && <SmallData/>}
            {selectedData === 'big' && <BigData/>}
        </div>
    );
};
