const { Country } = require('../db')
const { Op } = require('sequelize')

const countryById = async(id)=>{
    const getById = await Country.findOne({
        attributes:["name","flag","continent","id","capital","subregion","area","population"],
        where: {id: {[Op.like]: `%${id}`}}
    })
    return getById;
}

module.exports={
    countryById
}