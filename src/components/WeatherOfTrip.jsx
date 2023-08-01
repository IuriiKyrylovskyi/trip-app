import React from 'react';
import '../assets/styles/mainPanel.css';
import WeatherCard from './WeatherCard';

export default function WeatherOfTrip() {
    return (
        <div>

            <p className='shimmer'>
                Week
            </p>
            <WeatherCard />
        </div>
    )
}