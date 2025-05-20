import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, visitedCountriesHandler, visitedFlagsHandler }) => {
    // console.log(visitedCountriesHandler);
    const [visited, setVisited] = useState(false);
    const visitedHandler = () => {
        //    if(visited === true){
        //      setVisited(false);
        //    }
        //    else{
        //      setVisited(true);
        //    }
        setVisited(!visited);
        visitedCountriesHandler(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>

            <h2>Name: {country.name.common}</h2>
            <img style={{ width: '300px', height: '150px' }} src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? 'Free' : 'Not Free yet'}</p>
            <p>Official Name: {country.name.official}</p>
            <p>Population: {country.population}</p>
            <p>Continents: {country.continents[0]}</p>
            <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={visitedHandler}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={()=>visitedFlagsHandler(country.flags.png)}>Added Visited Flag</button>
        </div>
    );
};

export default Country;