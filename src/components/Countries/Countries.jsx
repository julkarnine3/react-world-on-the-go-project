import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const visitedCountriesHandler = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }
    const visitedFlagsHandler = (flag) => {
        const newVisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
        
    }

    return (
        <div >
            <h1>Traveling Countries:{countries.length}</h1>
            <h3>Traveled so far:{visitedCountries.length} </h3>
            <div className='visited-flag-container'>
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3} country={country} visitedCountriesHandler={visitedCountriesHandler} visitedFlagsHandler={visitedFlagsHandler}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;