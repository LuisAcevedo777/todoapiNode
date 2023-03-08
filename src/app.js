const express = require('express');
const morgan = require('morgan')
const userRoutesUser = require('../routes/user.routes')
const userRoutesTodo = require('../routes/todo.routes')
const PORT = 8000
const db = require('../utils/database')
const cors = require('cors')
const initModel = require('../models/initModels')


const app = express()
initModel();
app.use(express.json())
app.use(morgan('dev'))
app.use(userRoutesUser)
app.use(userRoutesTodo)
app.use(cors())




db.authenticate()
.then(()=>{console.log('conexion autenticada')})
.catch((error)=>console.log(error))


db.sync({alter: true})
.then(()=> console.log('sincronizada'))
.catch((error)=>console.log(error))




app.listen(PORT, ()=>{

console.log(`servidor corriendo en puerto ${PORT}`) 

})