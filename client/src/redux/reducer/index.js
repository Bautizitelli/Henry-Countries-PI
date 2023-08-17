import { GET_COUNTRIES,
        NEXT_PAGE,
        PREV_PAGE, 
        SEARCH_COUNTRY, 
        GET_COUNTRY_DETAILS,
        GET_COUNTRY_ACTIVITIES,
        UPDATE_SORTING,
        CLEAR_FILTERS,
        CONTINENT_FILTER
         } from "../actions"


let initialState = {
        allCountries:[],
        currentPage:0,
        countriesPerPage:10,
        currentPageCountries:[],
        countryActivities: [],
        countryDetails:{},
        foundCountryDetails:{},
        sorting:{
            alphabet:'default',
            population:'default'
        },
        selectedContinent:''
    }

function rootReducer(state = initialState,action){
    
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries:action.payload.allCountries,
                currentPage: action.payload.currentPage,
                countriesPerPage: action.payload.countriesPerPage,
                currentPageCountries: action.payload.currentPageCountries
            }
        case NEXT_PAGE:
            const nextPage = state.currentPage + 1;
            const nextCountries = state.allCountries.slice(
                nextPage * state.countriesPerPage,
                (nextPage + 1) * state.countriesPerPage
            );
            return{
                ...state,
                currentPage: nextPage,
                currentPageCountries: nextCountries,
            }
        case PREV_PAGE:
            const prevPage = state.currentPage - 1;
            const prevCountries = state.allCountries.slice(
                prevPage * state.countriesPerPage,
                state.currentPage * state.countriesPerPage
            );
            return{
                ...state,
                currentPage: prevPage,
                currentPageCountries: prevCountries,
            }
        case SEARCH_COUNTRY:
            return{
                ...state,
                foundCountryDetails: action.payload
            }
        case GET_COUNTRY_DETAILS:
            return{
                ...state,
                countryDetails:action.payload,
            }     
            case GET_COUNTRY_ACTIVITIES:
                return {
                    ...state,
                    countryActivities: action.payload
                };    
        case UPDATE_SORTING:
            return{
                ...state,
                sorting:{
                    ...state.sorting,
                    [action.payload.key]: action.payload.value
                },
                currentPage:0
            }    
            case CLEAR_FILTERS:
                return {
                  ...state,
                  sorting: {
                    alphabet: "default",
                    population: "default",
                  },
                  selectedContinent:'',
                  currentPage:0
                };
            case CONTINENT_FILTER:
                console.log(action.payload);
                return {
                    ...state,
                    selectedContinent: action.payload,
                    currentPage:0
                };    
        default:
            return state
    }
}

export default rootReducer
