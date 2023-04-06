import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './home.css'
import SmallData from "./SmallData";
import {BigData} from "./BigData";

export const Home = () => {
    const [selectedData, setSelectedData] = useState('');

    const handleDataSelection = (event) => {
        setSelectedData(event.target.value);
    };

    return (
        <div className='nav'>
            <h2> Choose your data</h2>
            <nav>
                <span className='link'>
                    <Link to="/small-data" onClick={() => setSelectedData('small')}>Small DATA</Link>
                    <Link to="/big-data" onClick={() => setSelectedData('big')}>Big DATA</Link>
                </span>
            </nav>
            {selectedData === 'small' && <SmallData/>}
            {selectedData === 'big' && <BigData/>}
        </div>
    );
};
