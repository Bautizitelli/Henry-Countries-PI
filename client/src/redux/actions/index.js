import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const GET_COUNTRY_ACTIVITIES = "GET_COUNTRY_ACTIVITIES"
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const UPDATE_SORTING = "UPDATE_SORTING"
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const CONTINENT_FILTER = "CONTINENT_FILTER"

export function searchCountry(countryName) {
  return async (dispatch) => {
      try {
          const response = await axios.get(`http://localhost:3001/countries/?name=${countryName}`);
          const countryDetailsArray = response.data;
          if (countryDetailsArray.length > 0) {
              const firstCountry = countryDetailsArray[0];
              dispatch({
                  type: SEARCH_COUNTRY,
                  payload: firstCountry,
              });
              return true;
          } else {
              dispatch({
                  type: SEARCH_COUNTRY,
                  payload: null,
              });
              return false;
          }
      } catch (error) {
          console.error('Error al buscar el país:', error);
          dispatch({
              type: SEARCH_COUNTRY,
              payload: null,
          });
          return false; 
      }
  };
}

export function getCountryDetails(idPais){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries/${idPais}`)
            const countryDetails = response.data

            dispatch({
                type:GET_COUNTRY_DETAILS,
                payload: countryDetails
            })
        } catch (error) {
            console.error("Error al obtener los detalles :", error)
        }
        }
    }

    export function getCountryActivities(idPais) {
      return async function(dispatch) {
          try {
              const response = await axios.get(`http://localhost:3001/countries/${idPais}/activities`);
              const countryActivities = response.data;
  
              dispatch({
                  type: GET_COUNTRY_ACTIVITIES,
                  payload: countryActivities
              });
          } catch (error) {
              console.error("Error al obtener las actividades del país:", error);
          }
      };
  }


export function getCountries(){
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/countries")
        const countriesData = response.data
        
        const currentPage = 0
        const countriesPerPage = 10
        const currentPageCountries = countriesData.slice(
            currentPage * countriesPerPage,
            (currentPage + 1) * countriesPerPage
          );

        return dispatch({
            type:GET_COUNTRIES,
            payload:{
                allCountries: countriesData,
                currentPage,
                countriesPerPage,
                currentPageCountries
            }
        })
    }
}

export function nextPage(){
    return {
        type:NEXT_PAGE
    }
}

export function prevPage(){
    return {
        type:PREV_PAGE
    }
}

export function updateSorting(sorting){
  return {
    type: UPDATE_SORTING,
    payload: sorting
  }
}

export function clearFilters() {
  return {
    type: CLEAR_FILTERS,
  };
}

export const updateContinentFilter = (continent) => {
  return {
    type: CONTINENT_FILTER,
    payload: continent,
  };
};