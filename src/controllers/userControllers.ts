import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
 
@JsonController()
export class UserController {
 
    @Get("/users")
    getAll() {
       return userRepository.findAll();
    }
 
    @Get("/users/:id")
    getOne(@Param("id") id: number) {
       return userRepository.findById(id);
    }
 
    @Post("/users")
    post(@Body() user: User) {
       return userRepository.insert(user);
    }
 
}