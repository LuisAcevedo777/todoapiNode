const Todo = require('../models/todo.model')
const Category = require('../models/category.model')
const {Op} = require('sequelize')

class TodoServices {

//CREATE

static async create(newTodo){
try{ 

const todoCreated = await Todo.create(newTodo)
return todoCreated}
catch(error){ throw error}}

//GET

static async getOne(id){
    try{ 
    
    const resut= await Todo.findAll({
       where: {user_id : id}, include: Category })
    return resut}
    catch(error){ throw error}}

    //UPDATE

    static async updateOne(id, bodyUpdate, tit){
       
        try{ 
        
        const resut= await Todo.update(bodyUpdate,{
           where:{ [Op.and]: [{user_id : id}, {title: tit} ]}})
        return resut}
        catch(error){ throw error}}

        //DELETE
    
        static async deleteOne(id, tit){
       
            try{ 
            
            const resut= await Todo.destroy({
               where:{ [Op.and]: [{user_id : id}, {title: tit} ]}})
            return resut}
            catch(error){ throw error}}

}
module.exports= TodoServices;