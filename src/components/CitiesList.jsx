import '../assets/styles/citiesList.css';
import CityCard from './CityCard';
import card1 from "../assets/images/berlin.jpg";
import card2 from "../assets/images/tokyo.jpeg";
import card3 from "../assets/images/Barcelona.jpg";
import card4 from "../assets/images/kyiv.jpg";
import card5 from "../assets/images/london.jpg";
import card6 from "../assets/images/paris.jpeg";
import card7 from "../assets/images/wien.jpg";

const cityData = [
    {
        'name': 'Berlin',
        'datestart': '14.08.2023',
        'dateend': '21.08.2023',
        'refpic': `${card1}`,
        'keyWord': 'ui'
    },
    {
        'name': 'Tokyo',
        'datestart': '17.08.2023',
        'dateend': '23.08.2023',
        'refpic': `${card2}`,
        'keyWord': 'ui'
    },
    {
        'name': 'Barcelona',
        'datestart': '16.08.2023',
        'dateend': '23.08.2023',
        'refpic': `${card3}`,
        'keyWord': 'ui'
    },
    {
        'name': 'Kyiv',
        'datestart': '',
        'dateend': '',
        'refpic': `${card4}`,
        'keyWord': 'ui'
    },
    {
        'name': 'London',
        'datestart': '',
        'dateend': '',
        'refpic': `${card5}`,
        'keyWord': 'ui'
    },
    {
        'name': 'Paris',
        'datestart': '',
        'dateend': '',
        'refpic': `${card6}`,
        'keyWord': 'ui'
    },
    {
        'name': 'Wien',
        'datestart': '',
        'dateend': '',
        'refpic': `${card7}`,
        'keyWord': 'ui'
    }
]


export default function CitiesList() {
    function handleEdit() {
        setFormVisibility(!formvisibility);
    }


    {/*   let presentTrip = cityData.sort().slice(3);*/ }
    return (
        <div className='citiesList'>

            <CityCard cityData={cityData.sort().slice(-3)} />
            <button onClick={handleEdit}>+<br />Add trip</button>
        </div>
    )
}