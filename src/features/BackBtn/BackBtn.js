import React from 'react';
import { Link } from 'react-router-dom';
import back from '../../assets/icon/back.png'

export const BackButton = () => {
    return (
        <Link to="/"><img src={back} /> back home</Link>
    )
}

