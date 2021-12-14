const Chart = require('../../models').Chart
const sequelize = require('sequelize')
exports.create = async (req,res) => {
    
    let date = new Date();
    try {
         let data = await Chart.create(req.body);
         return res.status(201).send({message: "Form data saved Successfully."})
       } catch(err){
        return res.status(500).send({message: err.message || "Something went wrong."})
    }
    
}
exports.getAll = async (req,res) => {
    
  try {
       let data = await Chart.findAll({
        attributes: ['name', 'age','gender','createdAt']
      })
       return res.status(200).send({message: data})
     } catch(err){
      return res.status(500).send({message: err.message || "Something went wrong."})
  }
  
}
exports.getPie = async (req,res) => {
    
    try {
         let data = await Chart.findAll({
            attributes: ['gender', [sequelize.fn('count', sequelize.col('gender')), 'cnt']],
            group: ['gender'],
         })
         return res.status(200).send({message: data})
       } catch(err){
        return res.status(500).send({message: err.message || "Something went wrong."})
    }
    
}
exports.getBar = async (req,res) => {
    
    try {
        var query = {
            attributes: [
              [sequelize.literal(`SUM(CASE  WHEN age <= 35 THEN 1 ELSE 0 END)`), 'Young'],
              [sequelize.literal(`SUM(CASE  WHEN age >= 36 and age <= 50 THEN 1 ELSE 0 END)`), 'Adult'],
              [sequelize.literal(`SUM(CASE  WHEN age > 50 THEN 1 ELSE 0 END)`), 'Seniors'],
            ],
            raw: true
          };
          
         let data = await Chart.findAll(query)
         return res.status(200).send({message: data})
       } catch(err){
        return res.status(500).send({message: err.message || "Something went wrong."})
    }
    
}