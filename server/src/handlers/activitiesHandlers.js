const { getActivities } = require('../controllers/getActivities')
const { postActivities } = require('../controllers/postActivities')

const getActivity=(req,res)=>{
    res.status(200).send(`Obtiene las actividades como objetos`)
    
}

const postActivity =async(req,res)=>{
    const { name, difficulty, duration, season, countries} = req.body;
    try {
      const newActivity = await postActivities(name, difficulty, duration, season, countries)
      res.status(200).json({createdActivity: newActivity})
    } catch (error) {
       res.status(500).json({ error: error.message});
    }
 }


module.exports={
    getActivity,
    postActivity
}