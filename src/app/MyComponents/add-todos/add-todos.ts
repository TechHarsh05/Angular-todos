import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.html',
  styleUrl: './add-todos.css',
  imports: [FormsModule],
})
export class AddTodos {
title: string | undefined;
desc: string | undefined;

 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

onSubmit(){
  
  const todo = {
    sno: 8,
    title: this.title,
    desc: this.desc,
    active: true 
  }
  
  this.todoAdd.emit(todo);
  console.log(todo);
}

}
