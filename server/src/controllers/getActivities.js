const { Activity,Country } = require('../db')

const getActivities =async()=>{
    const allActivities = await Activity.findAll({
        include: [
            {
                model: Country,
                attributes: ['name'], // Puedes elegir las propiedades que quieras mostrar del país
            },
        ],
    });
    return allActivities;
}

module.exports={
    getActivities
}