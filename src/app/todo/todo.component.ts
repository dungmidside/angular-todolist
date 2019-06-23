import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-service.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})

export class TodoComponent implements OnInit {

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  title = 'Todo list app';

  todoService: TodoService;

  todo: Todo = new Todo();

  ngOnInit() {
  }

  get todos(): Todo[] {
    return this.todoService.getTodos();
  }

  add() {
    this.todoService.add(this.todo);
    this.todo = new Todo();
  }

  toggle(todo: Todo) {
    this.todoService.toggle(todo);
  }

  remove(todo: Todo) {
    this.todoService.remove(todo);
    return this;
  }

}
