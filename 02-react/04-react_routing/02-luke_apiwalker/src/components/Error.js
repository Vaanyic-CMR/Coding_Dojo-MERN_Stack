import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/data.css'

import Form from './Form';

export default () => {
    const { cat, id } = useParams();

    return (
        <div>
            <Form cat={ cat } iD={ id } />
            <div className='data-div'>
                <img src="/images/not_the_droids.jpg" alt='These are not the droids you are looking for.'/>
            </div>
        </div>
    )
}