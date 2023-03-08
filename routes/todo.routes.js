const {Router} = require('express')
const{ getTodo, updateTodo} = require('../controllers/todo.controllers')
const{createTodo, deleteTodo} = require('../controllers/todo.controllers')

const router2 = Router();
router2.get("/api/v1/todo/:id", getTodo)
router2.put("/api/v1/todo/:id/:tit", updateTodo)
router2.post("/api/v1/todo", createTodo)
router2.delete("/api/v1/todo/:id/:tit", deleteTodo)


module.exports = router2