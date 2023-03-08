const User = require('./user.model')
const Activity = require('./activity.model')
const Category = require('./category.model')
const SubCategory = require('./subCategory.model')
const Todo = require('./todo.model')


const initModel = ()=> {

User.hasMany(Activity, {foreignKey: 'userId'})
Activity.belongsTo(User, {foreignKey: 'userId'})
Todo.hasMany(Activity, {foreignKey: 'todoId'})
Activity.belongsTo(Todo, {foreignKey: 'todoId'})
Category.hasMany(Todo, {foreignKey: 'categoryId'})
Todo.belongsTo(Category, {foreignKey: 'categoryId'})
Category.hasMany(SubCategory, {foreignKey: 'categoryCh'})
SubCategory.belongsTo(Category, {foreignKey: 'categoryCh'})

}

module.exports= initModel