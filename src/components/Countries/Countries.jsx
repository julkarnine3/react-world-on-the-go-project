import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const visitedCountriesHandler = (country) => {
        console.log('Total visited countries already',country);
    }

    return (
        <div >
            <h1>Traveling Countries:{countries.length}</h1>
            <h3>Traveled so far: </h3>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3} country={country} visitedCountriesHandler={visitedCountriesHandler}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;