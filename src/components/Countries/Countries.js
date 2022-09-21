import React, { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello from countries..{countries.length}</h1>
            {
                countries.map(country => <Country
                    name={country.name.common}
                    flag={country.flags.png}
                    capital={country.capital}
                    population={country.population}
                    region={country.region}
                ></Country>)
            }
        </div>
    );
};

export default Countries;