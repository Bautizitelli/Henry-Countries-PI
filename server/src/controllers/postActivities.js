const { Activity,Country } = require('../db')

const postActivities =async(name, difficulty, duration, season, countries)=>{
    console.log('Llamando al controlador postActivities');
    console.log('Datos recibidos en postActivities:', {
        name,
        difficulty,
        duration,
        season,
        countries
    });
    if (!name || !difficulty || !duration || !season || !countries) throw Error('Faltan datos para crear la actividad')
    const country = await Country.findOne({ where: { name: countries } });
    if (!country) {
        throw new Error('No se encontró el país especificado.');
    }
    try{
    console.log('Creando la actividad...');
    const activities = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        countries
        });
        console.log('actividad creada: ',activities);
        await activities.addCountry(country);
        console.log('ACTIVIDAD ASOCIADA A PAISES: ',activities);
    } catch(error){
        console.error('Error al crear la actividad:', error);
        throw error
    }
        //await activities.setCountries(countries)
        //return activities
    }

module.exports={
    postActivities
}