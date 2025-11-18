import { Component } from '@angular/core';
import { Todo } from '../../Todo'
import { NgForOf, NgIf } from '@angular/common';
import { TodoItem } from "../todo-item/todo-item";
import { AddTodos } from "../add-todos/add-todos";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
  styleUrl: './todos.css',
  imports: [NgForOf, TodoItem, AddTodos, NgIf],
})
export class Todos {
deleteTodo(todo: Todo) {
  console.log("onClick has been triggerd");
  const index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
AddTodo(todo: Todo) {
  console.log(todo);
  this.todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}

  localItem: string | null;
  todos:Todo[];
 constructor(){
  this.localItem = localStorage.getItem("todos");
  if (this.localItem == null) {
    this.todos = []
  }
  else{
    this.todos = JSON.parse(this.localItem)
  }
 }
}
