const{DataTypes} = require('sequelize')
const db = require('../utils/database')


const Todo = db.define('todos', {

id: { 

    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,},
    title:{

        type: DataTypes.STRING(30),
        allowNull: false,},
        description:{
type: DataTypes.TEXT,
allowNull: false,},
status: {

    type: DataTypes.STRING(50),
    defaultValue: 'pending',
    allowNull: false},

    categoryId: {

        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'},

        userId: {

            type: DataTypes.INTEGER,
            allowNull: false,
        field: 'user_id'}

},  
    {timestamps: false
})

module.exports = Todo;
