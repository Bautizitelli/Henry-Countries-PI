import { useDispatch,useSelector } from 'react-redux'
import { searchCountry } from '../../redux/actions'
import { useState,useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import style from './SearchBar.module.css'


function SearchBar(props){
    const dispatch = useDispatch()
    const location = useLocation()
    const foundCountryDetails = useSelector((state) => state.foundCountryDetails);

    const [searchInput, setSearchInput] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [notFound, setNotFound] = useState(false);

    const handleSearch = async () => {
      const formattedSearchInput = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
      const result = await dispatch(searchCountry(formattedSearchInput));

      if (result) {
          setShowSearch(true);
          setNotFound(false);
      } else {
          setShowSearch(true);
          setNotFound(true);
      }
  };

      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    useEffect(() => {
        if (location.pathname === '/home') {
          setShowSearch(false)
        }
      }, [location.pathname]);

    return(
        <div className={style.header}>
            <div className={style.nav}>
                <input 
                    type="text"
                    value={searchInput}
                    onChange={(event)=> setSearchInput(event.target.value)}
                    onKeyPress={handleKeyPress}
                    className={style.input}
                    placeholder='Escribe un país!'
                />
                <button 
                    className={style.button}
                    onClick={handleSearch}
                    >Buscar</button>
            </div>
             {showSearch && (
                <p className={style.link}>
                    {notFound ? (
                        <span>País no encontrado</span>
                    ) : (
                        <NavLink className={style.link} to={`/home/${foundCountryDetails.id}`}>
                            Ver detalle de {foundCountryDetails.name}!
                        </NavLink>
                    )}
                </p>
            )}
        </div>
    )
  }


export default SearchBar