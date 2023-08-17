import style from './Form.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import validation from './validation';

function Form(){
    const allCountries = useSelector(state => state.allCountries);
    const countryNames = allCountries.map(country => country.name)
    const [errors,setErrors] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:''
    });

    const [activity,setActivity] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:''
    });



    const handleInputChange=(event)=>{
        const value = event.target.value
        setActivity({ ...activity, [event.target.name]: value });
        validation(activity, errors, setErrors);
   }

    const handleSubmit= async(event)=>{
        event.preventDefault()
        console.log('Datos para enviar:', {
            name: activity.name,
            duration: activity.duration,
            difficulty: activity.difficulty,
            season: activity.season,
            countries: activity.countries
        });
        const hasErrors = Object.values(errors).some((error) => error !== '');
    if (hasErrors) {
        alert('Por favor, revisa el formulario antes de crear la actividad y vuelve a intentarlo.');
        return; 
    }
    try {
        const response = await axios.post('http://localhost:3001/activities',{
            name: activity.name,
            duration: activity.duration,
            difficulty: activity.difficulty,
            season: activity.season,
            countries: activity.countries
        })
        console.log('Respuesta de Axios:', response);
        if(response.status === 200) {
            alert('Actividad creada exitosamente')
        } else {
            alert('Hubo un problema al crear la actividad.')
        }
    } catch (error) {
        console.error('Error al crear la actividad: ', error);
        alert('Hubo un problema al crear la actividad.')
    }
   }

    return(
        <div className={style.formContainer}>
            <form className={style.formStyle}>
            <h1 >Crea una actividad !</h1>
                <div className={style.inputContainer}>
                    <label className={style.labelStyle} htmlFor="name">Nombre de la actividad:</label>
                        <input
                            type="text"
                            name="name"
                            value={activity.name}
                            onChange={handleInputChange}
                            className={style.input}  />
                </div>
                {errors.name && 
                    <div className={style.errorContainer}>
                        <p className={style.errorText}>{errors.name}</p>
                    </div>}
                <div className={style.inputContainer}>
                    <label className={style.labelStyle} htmlFor="difficulty">Dificultad:</label>
                        <input
                            type="number"
                            name="difficulty"
                            value={activity.difficulty}
                            onChange={handleInputChange}
                            className={style.input}  />
                </div>
                {errors.difficulty && 
                    <div className={style.errorContainer}>
                        <p className={style.errorText}>{errors.difficulty}</p>
                    </div>}
                <div className={style.inputContainer}>
                    <label className={style.labelStyle} htmlFor="duration">Duración:</label>
                        <input
                            type="number"
                            name="duration"
                            value={activity.duration}
                            onChange={handleInputChange}
                            className={style.input}  />                               
                </div>
                {errors.duration && 
                    <div className={style.errorContainer}>
                        <p className={style.errorText}>{errors.duration}</p>
                    </div>} 
                <div className={style.inputContainer}>
                    <label className={style.labelStyle} htmlFor="season">Temporada:</label>
                    <select
                        name="season"
                        value={activity.season}
                        onChange={handleInputChange}
                        className={style.input}>
                        <option className={style.selectorOptions} value="">Seleccionar temporada</option>
                        <option className={style.selectorOptions} value="Otoño">Otoño</option>
                        <option className={style.selectorOptions} value="Primavera">Primavera</option>
                        <option className={style.selectorOptions} value="Invierno">Invierno</option>
                        <option className={style.selectorOptions} value="Verano">Verano</option>
                        </select>
                </div>
                {errors.season && 
                    <div className={style.errorContainer}>
                        <p className={style.errorText}>{errors.season}</p>
                    </div>}
                <div className={style.inputContainer}>
                    <label className={style.labelStyle} htmlFor="countries">País:</label>
                    <select
                        name="countries"
                        value={activity.countries}
                        onChange={handleInputChange}
                        className={style.input} >
                        <option className={style.selectorOptions} value=""> Seleccionar país</option>
                        {countryNames.map((countryName) => (
                            <option
                                key={countryName}
                                className={style.selectorOptions}
                                value={countryName} >
                                {countryName}
                                </option>
                        ))}
                        </select>
                </div>
                {errors.countries && 
                    <div className={style.errorContainer}>
                        <p className={style.errorText}>{errors.countries}</p>
                    </div>}
                <div className={style.buttonContainer}>
                    
                    <button 
                        className={style.button}
                        onClick={handleSubmit}
                        typeof="button"
                        >Crear Actividad</button>
                        <Link to='/activities/activity-list'>
                    <button className={style.button}>Ver actividades creadas</button>
                </Link>
                    <Link to='/home'>
                        <button className={style.button}> Volver a home</button>
                    </Link>
                </div>
            </form>
        </div>
        
    )
}

export default Form