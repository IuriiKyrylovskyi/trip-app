import React from 'react';
import '../assets/styles/mainPanel.css';
import CityCard from './CityCard';

export default function CitiesList() {
    return (
        <div>
            <p className='shimmer'>
                Cities
                <CityCard />
            </p>
        </div>
    )
}