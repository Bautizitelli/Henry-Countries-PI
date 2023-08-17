import style from './Landing.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


function Landing(){
    return(
        <div className={style.backgroundStyle}>
            <div className={style.landingContainer} >
                <div className={style.divStyle}>
                    <h1>Bienvenidos a mi Proyecto Individual !</h1>
                    <NavLink to='/home'>
                    <button className={style.button}>Ingresar a la Home Page!</button>     
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Landing