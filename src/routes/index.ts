import express from 'express';
import { Router, Request, Response } from 'express';
import { createExpressServer } from "routing-controllers";

import todoController from '../controllers/todos';
const router = express.Router();

router.get('/api/v1/todos', todoController.getAllTodos);
router.get('/api/v1/todos/:id', todoController.getTodo);
router.post('/api/v1/todos', todoController.createTodo);
router.put('/api/v1/todos/:id', todoController.updateTodo);
router.delete('/api/v1/todos/:id', todoController.deleteTodo);


export default router;
