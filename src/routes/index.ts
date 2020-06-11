import express from 'express';
import { Router, Request, Response } from 'express';
import { createExpressServer } from "routing-controllers";

import todoController from '../controllers/todos';
const router = express.Router();

router.get('/api/todos', todoController.getAllTodos);
router.get('/api/todos/:id', todoController.getTodo);
router.post('/api/todos', todoController.createTodo);
router.put('/api/todos/:id', todoController.updateTodo);
router.delete('/api/todos/:id', todoController.deleteTodo);


export default router;
