const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const getAllCountries= async()=>{
    const countries = Country.findAll({
        attributes: ["name","id","flag","continent","population"],
        include: Activity
    });
    return countries
}

module.exports={
    getAllCountries
}