import React, { useState } from 'react';
import './Country.css'
// const card={
        
//         margin:'15px'
        
//     }
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    //console.log(country)
    const [visited,setVisited] = useState(false);

    console.log(handleVisitedCountries)
    const handleVisited = ()=>{
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(visited?false:true)
        handleVisitedCountries(country)
    }

    return (
        <div className={`country ${visited && 'country-visited' }`}>
            <img src={country?.flags?.flags?.png} alt="" />
            <p>Name:{country.name.common}</p>
            <p>Population:{country.population.population}</p>
            <p>Language:{country.languages.languages.eng}</p>
            <p>Area:{country.area.area} {country.area.area>30000?"Big Country":"Small Country"}</p>
            <button onClick={handleVisited}>
               {visited? 'Visited':'Not Visited'} 
            </button>

            <button onClick={()=>{handleVisitedFlags(country?.flags?.flags?.png)}}>
                Add visited flag
            </button>
        </div>
    );
};

export default Country;