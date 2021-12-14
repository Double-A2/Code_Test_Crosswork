const express     = require('express');
const app         = express()
const chartRouter = require('./app/routers/chartRouter')
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/api/chart' , chartRouter)
 module.exports = {app}