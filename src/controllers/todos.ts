import db from '../db/db';
import {models} from '../models/index';
import { Router, Request, Response } from 'express';
import { createExpressServer } from "routing-controllers";
import todos from '../db/db';

class TodosController {
  getAllTodos(req: Request, res: Response) {
    return res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: db,
    });
  }

  getTodo(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    db.map((todo) => {
      if (todo.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'todo retrieved successfully',
          todo,
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'todo does not exist',
    });
  }

  createTodo(req: Request, res: Response) {  
      if (!req.body.title) {    
          return res.status(400).send({      
              success: 'false',      
              message: 'title is required',    
            });
        }
        
        const todo = {  
            title: req.body.title,
        };
        
        models.Todo.create(todo).then((todo:any) => {  
            return res.status(201).send({     
                success: 'true',     
                message: 'todo added successfully',     
                todo,   
            });
        });
    }

  updateTodo(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    let todoFound = {
        id: id, 
        title: '', 
        description: ''
    };

    let itemIndex = 0;
    db.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = index;
      }
    });

    if (!todoFound) {
      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }

    const newTodo = {
      id: todoFound.id,
      title: req.body.title || todoFound.title,
      description: req.body.description || todoFound.description,
    };

    db.splice(itemIndex, 1, newTodo);

    return res.status(201).send({
      success: 'true',
      message: 'todo added successfully',
      newTodo,
    });
  }

  deleteTodo(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    let todoFound;
    let itemIndex = 0;
    db.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = index;
      }
    });

    if (!todoFound) {
      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });
    }
    db.splice(itemIndex, 1);

    return res.status(200).send({
      success: 'true',
      message: 'Todo deleted successfuly',
    });
  }
}

const todoController = new TodosController();
export default todoController;