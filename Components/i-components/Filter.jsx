export default function Filter({controlCountries}) {

    let { data, setCountries } = controlCountries;
    const filteredCountry = (countryRegion) => {
 
     if(countryRegion === 'All') setCountries(data)
 
     else {
      let filteredCountries = data.filter(country => country.region === countryRegion);
      setCountries(filteredCountries)
     }
    }
}