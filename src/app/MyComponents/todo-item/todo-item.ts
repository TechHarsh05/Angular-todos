import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem implements OnInit{
  @Input() todo: Todo | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor(){}
  ngOnInit(): void {
    
  }
  
  onClick(todo:Todo | undefined){
    this.todoDelete.emit(todo);
    console.log("Delete btn ");
    
  }

}
