import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className='country'>
            <img src={props.flag} alt="" />
            <h4>Country Name: {props.name} </h4>
            <p>Capital:  {props.capital} </p>
            <p>Area: {props.area} </p>
            <p>Region: {props.region} </p>
            <p>Population: {props.population} </p>
        </div>
    );
};

export default Country;