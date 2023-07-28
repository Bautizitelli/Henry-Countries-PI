const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const countryByName = async(name)=>{
    const getByName = await Country.findAll({
        where:{ 
            name:{ [Op.like]: `%${name}%`}
        },
        include:{
        model: Activity,
        through:{ attributes:[] }
    }
    })
    return getByName;
}

module.exports={
    countryByName
}