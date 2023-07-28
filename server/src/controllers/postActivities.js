const { Activity, Country } = require('../db')

const postActivities =async(name, difficulty, duration, season, countries)=>{

    if (!name || !difficulty || !duration || !season) throw Error('Faltan datos para crear la actividad')
    const activities = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        });
        await activities.setCountries(countries)
        return activities
    }
 

module.exports={
    postActivities
}