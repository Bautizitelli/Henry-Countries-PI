const { Activity,Country } = require('../db')

const getActivities =async()=>{
    const allActivities = await Activity.findAll({
        include: [
            {
                model: Country,
                attributes: ['name'],
            },
        ],
    });
    return allActivities;
}

module.exports={
    getActivities
}