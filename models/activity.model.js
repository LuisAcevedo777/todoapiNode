const{DataTypes} = require('sequelize')
const db = require('../utils/database')


const Activity = db.define('activities', {

id: { 

    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,},

    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
field: 'user_id'},

        todoId:{
type: DataTypes.INTEGER,
allowNull: false,
field: 'todo_id',
        },  },  
        {timestamps: false
})

module.exports = Activity;
