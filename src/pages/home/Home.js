import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

export const Home = () => {
    return (
        <div className='nav'>
            <h2> Choose your data</h2>
            <nav>
                <div className='link'>
                    <Link to="/small-data" value="small">Small DATA</Link>
                    <Link to="/big-data" value="big">Big DATA</Link>
                </div>
            </nav>
        </div>
    );
};
