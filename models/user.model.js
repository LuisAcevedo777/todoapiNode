const{DataTypes} = require('sequelize')
const db = require('../utils/database')


const User = db.define('users', {

id: { 

    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
allowNull: false,
},
    username:{

        type: DataTypes.STRING(30),
        allowNull: false,},
        email:{
type: DataTypes.STRING(30),
allowNull: false,
unique: true,
validate:{isEmail: true}},
password: {

    type: DataTypes.STRING(50),
    allowNull: false}, },  
    {timestamps: false

})

module.exports = User;


