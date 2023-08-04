import '../assets/styles/weatherCard.css';

export default function WeatherCard() {
    return (
        <div>
            <h2 className='shimmer'>
                Weather
            </h2>
            <div className='wrapper'>
                <div>Sunday</div>
                <div>
                    <p>🌧</p>
                </div>
                <div>24/21</div>

            </div>


        </div>
    )
}