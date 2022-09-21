import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, region, flags, capital, area } = props.country;
    return (
        <div className='country'>
            <h4>Country Name: {name.common} </h4>
            <img src={flags.png} alt="" />
            <p>Capital:  {capital} </p>
            <p>Area: {area} </p>
            <p>Region: {region} </p>
            <p>Population: {population} </p>
        </div>
    );
};

export default Country;