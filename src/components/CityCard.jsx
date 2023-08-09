import '../assets/styles/mainPanel.css';
import "../assets/styles/cityCard.css";

export default function CityCard(props) {
    return (
        <>
            {props.cityData.map((city, index) => {
                return (
                    <div key={index} className='cardWrap' >
                        <div className='cityphotoCard'>
                            <img src={city.refpic} alt='main view of ${city.name}' />
                        </div>
                        <div>
                            <h3>{city.name}</h3>
                            <p>{city.datestart} - {city.dateend}</p>

                        </div>
                    </div>
                )
            }
            )}
        </>
    )
}