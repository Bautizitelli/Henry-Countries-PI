import style from './NavBar.module.css'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

function NavBar(props){
    return(
        <div className={style.container}>
            <img src="whiteMap.png" 
                alt=" IMG Not Found" 
                className={style.topImage}
                height={80}
            />
            <h2 className={style.textStyle}>Countries P.I.</h2>
                <Link to='/activities/activity-list'>
                    <button className={style.button}>Lista de actividades</button>
                </Link>
                <Link to='/activities'>
                    <button className={style.button}>Agregar actividad</button>
                </Link>
            <SearchBar
                searchValue={props.searchValue}
                handleSearchChange={props.handleSearchChange}
                handleSearchSubmit={props.handleSearchSubmit}
            />
        </div>
    )
}

export default NavBar