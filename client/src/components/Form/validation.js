export default function validation(activity,errors,setErrors){
    const newErrors = {
        name: !activity.name
          ? 'Este campo es obligatorio.'
          : activity.name.length < 2
          ? 'El nombre de la actividad debe tener más de 2 letras.'
          : '',
        difficulty: !activity.difficulty
            ? 'Este campo es obligatorio.' 
            :  activity.difficulty < 0 || activity.difficulty > 5
            ? 'La dificultad debe ser entre 1 y 5'
            : '',
        duration: !activity.duration
            ? 'Este campo es obligatorio.'
            :  activity.duration < 0 || activity.duration > 48 
            ? 'La duración de la actividad debe ser entre 1 y 48 horas'
            : '',
        season: !activity.season
            ? 'Este campo es obligatorio.'
            : '',
        countries: !activity.countries
            ? 'Este campo es obligatorio.'
            : '',
      };
      setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
}