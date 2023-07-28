const { countryById } = require('../controllers/countryById');
const { getAllCountries } = require('../controllers/getAllCountries')
const { countryByName } = require('../controllers/countryByName')

const getCountryById= async(req,res)=>{
    const {idPais}= req.params
    try {
        const getById = await countryById(idPais)
        return res.status(200).json(getById)
    }catch (error){
        return res.status(404).json({error: error.message})
    }
}

const getCountryByName = async(req,res)=>{
    const {name} = req.query;
    try {
        
        if(!name){
            const countries = await getAllCountries()
            return res.status(200).json(countries)
        }else{
            const getByName = await countryByName(name)
            return res.status(200).json(getByName)
        }
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports={
    getCountryById,
    getCountryByName,
    getAllCountries
}