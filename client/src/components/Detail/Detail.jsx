import ActivityList from '../Activity/Activity';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCountryDetails, getCountryActivities } from '../../redux/actions';

import style from './Detail.module.css'

function Detail(){
    const { idPais } = useParams();
    const dispatch = useDispatch();
    const countryDetails = useSelector((state)=> state.countryDetails)
    const countryActivities = useSelector((state)=> state.countryActivities)


    useEffect(()=>{
        dispatch(getCountryDetails(idPais));
        dispatch(getCountryActivities(idPais));
    },[dispatch, idPais])
    
    const removeBraces = (str) => {
        return typeof str === 'string' ? str.replace(/({|})/g, '') : str;
      };
    
      const formatNumber = (num) => {
        return typeof num === 'number' ? num.toLocaleString() : num;
      };  

    return(
        <div className={style.detailContainer}>
            <div className={style.detailCard}>
                
            <h1>Nombre del País: {countryDetails.name}</h1>
            <h2>ID: {countryDetails.id}</h2>
            <h2>Capital: {removeBraces(countryDetails.capital)}</h2>
            <h2>Población: {formatNumber(countryDetails.population)}</h2>
            <h2>Area: {formatNumber(countryDetails.area)} km2</h2>
            <h2>Continente: {countryDetails.continent}</h2>
            {countryDetails.subregion && <h2>Subregión: {countryDetails.subregion}</h2>}
            <img className={style.imgStyle} src={countryDetails.flag} alt="" />
            <Link to='/home'>
                <button className={style.button}>Volver a Home</button>
            </Link>
            </div>
        </div>
    )
}

export default Detail