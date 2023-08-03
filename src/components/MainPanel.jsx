import '../assets/styles/mainPanel.css';
import CitiesList from './CitiesList';
import WeatherOfTrip from './WeatherOfTrip';

export default function MainPanel() {
    return (
        <div className='main'>
            <h1>
                Weather <strong>Forecast</strong></h1>
            <div className="sectionSearch">
                <form>
                    {/*onSubmit={callCurrentWeather}>*/}
                    <input
                        className="citySearch"
                        type="search"
                        placeholder="🔎 Search your trip" />
                    {/* onChange={getCity}*/}

                </form>
            </div>
            <CitiesList />
            <WeatherOfTrip />

        </div>
    )
}