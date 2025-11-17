import { Component } from '@angular/core';
import { Todo } from '../../Todo'
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
  styleUrl: './todos.css',
  imports: [NgForOf],
})
export class Todos {

  todos:Todo[];
 constructor(){
  this.todos = [
    {
    sno:6,
    title:"Fruits",
    desc:"sweet",
    active:true
  },
  {
    sno:5,
    title:"Vegetable",
    desc:"for food",
    active:true
  },
  {
    sno:9,
    title:"coffee",
    desc:"sour",
    active:false
  }
  ]
 }
}
