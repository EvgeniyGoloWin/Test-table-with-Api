import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../../store/slice/selectedDataSlice';
import Data from '../data/Data';

import './home.css';

export const Home = () => {
    const dispatch = useDispatch();
    const selectedData = useSelector(state => state.data);

    const handleDataSelection = (event) => {
        dispatch(selectData(event.target.value));
    };

    return (
        <div className='nav'>
            <h2> Choose your data</h2>
            <nav>
                <div className='link'>
                    <Link to="/small-data" onClick={handleDataSelection} value="small">Small DATA</Link>
                    <Link to="/big-data" onClick={handleDataSelection} value="big">Big DATA</Link>
                </div>
            </nav>
            {selectedData === 'small' && <Data />}
            {selectedData === 'big' && <Data />}
        </div>
    );
};
