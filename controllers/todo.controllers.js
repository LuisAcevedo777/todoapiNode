const TodoServices = require('../services/todo.services')


const createTodo = async(req, res)=>{

try{

const newTodo = req.body;
const result = await TodoServices.create(newTodo)
res.status(201).json(result)}
catch(error){res.status(400).json(error)}

}

const getTodo = async(req, res)=>{

    try{
    
    const {id}= req.params;
    const result = await TodoServices.getOne(id)
    
    res.json(result)}
    catch(error){res.status(400).json(error)}
    
    }

    const updateTodo = async(req, res)=>{

        try{
        
        const {id,tit}= req.params;
        const bodyUpdate = req.body
        const result = await TodoServices.updateOne(id, bodyUpdate, tit)
        res.status(204).send()}
        catch(error){res.status(400).json(error)}
        
        }
    
        const deleteTodo = async(req, res)=>{

            try{
            
            const {id,tit}= req.params;
            const result = await TodoServices.deleteOne(id,tit)
            res.status(201).send()}
            catch(error){res.status(400).json(error)}
            
            }
        



module.exports={

createTodo,
getTodo,
updateTodo,
deleteTodo
}