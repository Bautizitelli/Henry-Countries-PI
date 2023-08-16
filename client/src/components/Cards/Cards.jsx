import Card from "../Card/Card"
import style from './Cards.module.css'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { updateSorting, clearFilters,updateContinentFilter } from "../../redux/actions";
//import { getFilteredAndSortedCountries } from "../../redux/selectors";

function Cards(props){
    const { currentPage, countriesPerPage, currentPageCountries } = props;
    //const currentPageCountries = props.currentPageCountries;
    const selectedContinent = props.selectedContinent;

    const startIndex = currentPage * countriesPerPage;

    const dispatch = useDispatch();
    const sorting = useSelector((state)=>state.sorting);

    const handleContinentFilter = (event) => {
       // setSelectedContinent(event.target.value);
       const value = event.target.value;
       console.log(updateContinentFilter(value));
       dispatch(updateContinentFilter(value))
      };
      
    const handleAlphabetSort =(event)=>{
        const value = event.target.value;
        dispatch(updateSorting({key:'alphabet',value}))
    }

    const handlePopulationSort = (event) => {
        const value = event.target.value;
        dispatch(updateSorting({ key: 'population', value }));
    }
    const handleClearFilters = () => {
        dispatch(clearFilters());
      };
    

    return(
        <div >
            <div className={style.pagesContainer}>
                <div className={style.pageStyle}>
                    {/* <h3 className={style.textStyle}>Ordenar por:</h3> */}
                    <select name="" className={style.selector} onChange={handlePopulationSort} value={sorting.population}>
                        <option value="default" className={style.selectorOptions} disabled>Cantidad de Población</option>
                        <option value="asc" className={style.selectorOptions}>Ascendente</option>
                        <option value="desc" className={style.selectorOptions}>Descendente</option>
                    </select>
                    <select name="" className={style.selector} onChange={handleAlphabetSort} value={sorting.alphabet}>
                        <option value="default" className={style.selectorOptions} selected disabled>Orden alfabético</option>
                        <option value="asc" className={style.selectorOptions}>Ascendente</option>
                        <option value="desc" className={style.selectorOptions}>Descendente</option>
                    </select>
                    <button className={style.button} onClick={props.prevHandler}>Anterior</button>
                        <h1 className={style.pageCounter}>{props.currentPage + 1}</h1>
                    <button className={style.button}  onClick={props.nextHandler}>Siguiente</button>
                    <select name="" onChange={handleContinentFilter} className={style.selector}>
                        <option value="" className={style.selectorOptions} selected disabled>Continente</option>
                                <option value="Europe" className={style.selectorOptions}>Europe</option>
                                <option value="South America" className={style.selectorOptions}>South America</option>
                                <option value="North America" className={style.selectorOptions}>North America</option>
                                <option value="Asia" className={style.selectorOptions}>Asia</option>
                                <option value="Oceania" className={style.selectorOptions}>Oceania</option>
                                <option value="Africa" className={style.selectorOptions}>Africa</option>
                    </select>    
                            {/* <select name="" className={style.selector}>
                                <option value="" className={style.selectorOptions} selected disabled>Actividades</option>
                                <option value="" className={style.selectorOptions}>A</option>
                                <option value="" className={style.selectorOptions}>B</option>
                                <option value="" className={style.selectorOptions}>C</option>
                                <option value="" className={style.selectorOptions}>D</option>
                            </select> */}
                    <button onClick={handleClearFilters}className={style.button}>Limpiar filtros</button>    
                    
                </div>
            </div>

            {/* <div className={style.cardsStyle}>
            {currentPageCountries?.map(country=>
               <Card
                key={country.id}
                country={country}/>)}
            </div> */}
            <div className={style.cardsStyle}>
      {currentPageCountries
        .filter((country) => !selectedContinent || country.continent === selectedContinent)
        .map((country) => (
          <Card key={country.id} country={country} />
        ))}
    </div>
        </div>
    )
}

export default Cards