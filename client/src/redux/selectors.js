export const getFilteredAndSortedCountries = (state) => {
    const sorting = state.sorting;
    const countries = state.allCountries;
    const selectedContinent = state.selectedContinent;

    const filteredCountries = selectedContinent
        ? countries.filter((country) => country.continent === selectedContinent)
        : countries;

    const compareCountries = (a, b) => {
        if (sorting.alphabet === 'asc') {
            return a.name.localeCompare(b.name);
        } else if (sorting.alphabet === 'desc') {
            return b.name.localeCompare(a.name);
        } else if (sorting.population === 'asc') {
            return a.population - b.population;
        } else if (sorting.population === 'desc') {
            return b.population - a.population;
        } else {
            return 0;
        }
    };
    const sortedCountries = [...filteredCountries].sort(compareCountries)
  
    return sortedCountries;
  }