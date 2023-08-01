import React from 'react';
import '../assets/styles/mainPanel.css';
import CitiesList from './CitiesList';
import WeatherOfTrip from './WeatherOfTrip';

export default function MainPanel() {
    return (
        <div>
            <h1 className='shimmer'>
                Weather Forecast
                <div className="CitySearch">
                    <form>
                        {/*onSubmit={callCurrentWeather}>*/}
                        <input
                            className="city-search"
                            type="search"
                            placeholder="🔎 Search your trip" />
                        {/* onChange={getCity}*/}

                    </form>
                </div>
                <CitiesList />
                <WeatherOfTrip />
            </h1>
        </div>
    )
}