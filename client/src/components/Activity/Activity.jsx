import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './Activity.module.css'

function ActivityList({ activities: initialActivities}){
    const [activities, setActivities] = useState([]);

    const getActivities = () => {
        axios.get('http://localhost:3001/activities/activity-list')
            .then(response => {
                console.log('Respuesta de actividades:', response.data);
                setActivities(response.data.allActivities);
            })
            .catch(error => {
                console.error('Error al obtener las actividades:', error.response);
            });
    };
    useEffect(() => {
        getActivities();
        console.log(getActivities());
    }, []);

    return (
        <div className={style.activityContainer}>
            <div className={style.headerBox}>
        <h1 className={style.headerText}>Actividades</h1>
        <div className={style.buttons}>
        <button onClick={getActivities} className={style.button}>Actualizar</button>
        <Link to='/activities'>
                    <button className={style.button}>Agregar actividad</button>
                </Link>
        <Link to='/home'>
            <button className={style.button}>Volver a Home</button>
        </Link>
        </div>
            </div>
        {activities.length > 0 && (
            <div className={style.activityGrid}>
                {activities.map(activity => (
                    <div key={activity.id} className={style.activityCard}>
                        <h3 className={style.styleText}>{activity.name}</h3>
                        <p className={style.styleText}>Dificultad: {activity.difficulty}</p>
                        <p className={style.styleText}>Duración: {activity.duration}hs.</p>
                        <p className={style.styleText}>Temporada: {activity.season}</p>
                        <p className={style.styleText}>
                            País:
                            {activity.Countries && activity.Countries.map(country => (
                                <p className={style.styleText} key={country.name}>
                                    {country.name}
                                </p>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        )}
    </div>
    );
}

export default ActivityList;