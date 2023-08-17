import React from "react"
import styles from "./About.module.css"
import { Link } from "react-router-dom"

export default function About(){
    return (
        <div className={styles.aboutContainer}>
        <div className={styles.hoverContainer}>    
        <div className={styles.about}>
           <h1>Bienvenidos a mi Proyecto Individual.</h1>
           <h2>Countries P.I.</h2>
           <p>En esta app podrán visualizar una lista de todos los paises
            del mundo, como tambien ordenarlos por su cantidad de población o 
            por orden alfabetico ya sea de forma ascendente o descendente y
            filtrarlos por continente. Tambien podrás crear las actividades 
            correspondientes a cada pais mediante un formulario y luego ver
            las actividades creadas
           </p>
            <span>Mi nombre es Bautista Zitelli, soy estudiante de Henry
                en la carrera desarrollo web full stack en su modalidad
                part-time. 
            </span>
            <p>
                <a className={styles.links} href="https://github.com/Bautizitelli"       target="_blank">GitHub</a>
                <a className={styles.links} href="https://www.linkedin.com/in/bautista-zitelli-32174025a/" target="_blank">LinkedIn</a>
                <a className={styles.links} href="https://t.me/Bautizitelli" target="_blank">Telegram</a>
            </p>
                <div className={styles.div}>
                    <Link to='/home'> 
                        <button className={styles.button}>Volver a home</button> 
                    </Link> 
                </div>
             </div>
             </div>
        </div>
    )
}