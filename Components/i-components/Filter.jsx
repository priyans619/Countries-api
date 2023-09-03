export default function Filter({regions, controlCountries}) {

    let { data, setCountries } = controlCountries;
    const filteredCountry = (countryRegion) => {
 
     if(countryRegion === 'All') setCountries(data)
 
     else {
      let filteredCountries = data.filter(country => country.region === countryRegion);
      setCountries(filteredCountries)
     }
    }

    return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <Dropdown className={`${styles.filter}`}>
                <Dropdown.Toggle
                  className={`${styles.filter} shadow-sm`}
                  variant=""
                  id="dropdown-basic"
                >
                  Filter by Region
                </Dropdown.Toggle>
        
              </Dropdown>
            </motion.div>
          )
}