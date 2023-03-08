const{DataTypes} = require('sequelize')
const db = require('../utils/database')


const SubCategory = db.define('subcategories', {

id: { 

    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,},

    name:{

        type: DataTypes.STRING(25),
        allowNull: false,},
        
categoryCh: {

    type: DataTypes.INTEGER,
    allowNull: false,
     field: 'category_ch',
}, },  
{timestamps: false

})

module.exports = SubCategory;
