import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] | undefined;
  inputTodo:string="";
  constructor() { }
  ngOnInit(): void{
    this.todos = []
  }

  toggleDone(id: number){
    // @ts-ignore
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }
  deleteTodo(id: number){
    // @ts-ignore
    this.todos = this.todos.filter((v,i) => i !== id);
  }
  addTodo(todo_text: string){
    if (todo_text !== ''){
      let add_todo: Todo;
      add_todo={
        completed:false,
        content:todo_text
      }
      this.todos?.push(add_todo);

    }
    this.inputTodo = "";

  }
}
