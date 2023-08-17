import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getCountries, nextPage, prevPage, updateContinentFilter } from "../../redux/actions"
import { getFilteredAndSortedCountries } from "../../redux/selectors";
import NavBar from "../NavBar/NavBar"
import Cards from "../Cards/Cards"


function Home(){
    
    const dispatch = useDispatch()
    const { currentPageCountries,
            currentPage,
            countriesPerPage,
            allCountries 
          }= useSelector((state) => state)

    
          const [countriesList, setCountriesList] = useState(
            currentPageCountries.slice(
              currentPage * countriesPerPage,
              (currentPage + 1) * countriesPerPage
            )
          );      
          

    const searchResult = useSelector((state) => state.searchResult);
    const filteredAndSortedCountries = useSelector(getFilteredAndSortedCountries);   
    
    const [selectedContinent, setSelectedContinent] = useState("");

    const totalPageCount = Math.ceil(allCountries.length / countriesPerPage);


    const handleSearchChange =(event)=>{
        setSearchValue(event.target.value);
      };
      
      const handleSearchSubmit =()=> {
        if (searchValue.length === 3) {
          dispatch(searchCountryById(searchValue));
        }
      };  

    const nextHandler=()=>{
        if (currentPage < totalPageCount - 1) {
            dispatch(nextPage());
          }
      }

      const prevHandler=()=>{
        if (currentPage > 0) {
            dispatch(prevPage());
          } 
      }

      const handleContinentFilter = (event) => {
        const continent = event.target.value;
        setSelectedContinent(continent);
        dispatch(updateContinentFilter(continent));
      };  

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])

    return(
        <div >
            <NavBar
                allCountries={allCountries}
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
            />
            <Cards 
                currentPageCountries={filteredAndSortedCountries.slice(
                    currentPage * countriesPerPage,
                    (currentPage + 1) * countriesPerPage
                  )}
                allCountries={allCountries}
                countriesPerPage={countriesPerPage}
                currentPage={currentPage}
                prevHandler={prevHandler}
                nextHandler={nextHandler}
                />
        </div>
    )
}

export default Home


