import React, { useEffect } from 'react'
import CountryContext from './CountryContext.js'
import axios from 'axios';
function CountryContextProvider({children}) {
    let [countries,setCountries] = React.useState([])
    let getCountry=async(url)=>{
      try {
        const response = (await axios.get(url));
  
          
          setCountries(response.data.data)
        
        // console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      getCountry('https://countriesnow.space/api/v0.1/countries/')
    },[])
  return (
    <CountryContext.Provider value={{countries,setCountries}}>
        {children}
    </CountryContext.Provider>
  )
}

export default CountryContextProvider