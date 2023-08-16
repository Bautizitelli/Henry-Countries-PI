import { NavLink } from 'react-router-dom'
import style from './Card.module.css'


function Card({country}){
    return(
        <NavLink className={style.link} to={`/home/${country.id}`}>
        <div className={style.container}>
            <div className={style.cardStyle}>
                <h2 className={style.styleCardName}>{country.name}</h2>
                <img width={280}
                height={140}
                src={country.flag}
                alt="Not found"/>  
                <h3 className={style.styleCardName}>Continente : {country.continent}</h3>
            </div>
        </div>
        </NavLink>
    )
}

export default Card