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

    const handleSearch =async()=>{
       await dispatch(searchCountry(searchInput));
       setShowSearch(true)
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
                    className={style.input}
                    placeholder='Escribe un país!'
                />
                <button 
                    className={style.button}
                    onClick={handleSearch}
                    >Buscar</button>
            </div>
              {foundCountryDetails.id !== undefined && showSearch &&(
                <p className={style.link}>Ver detalle de <NavLink className={style.link} to={`/home/${foundCountryDetails.id}`}>{foundCountryDetails.name}</NavLink>!</p>
                )}
        </div>
    )
  }


export default SearchBar