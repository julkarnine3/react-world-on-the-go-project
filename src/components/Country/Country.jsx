import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);
    const visitedHandler = () => {
        console.log("Visited");
    }
    return (
        <div className='country'>

            <h2>Name: {country.name.common}</h2>
            <img style={{ width: '300px', height: '150px' }} src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? 'Free' : 'Not Free yet'}</p>
            <p>Official Name: {country.name.official}</p>
            <p>Population: {country.population}</p>
            <p>Continents: {country.continents[0]}</p>
            <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={visitedHandler}>Not Visited</button>
        </div>
    );
};

export default Country;