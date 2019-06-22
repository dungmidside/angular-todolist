import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // tslint:disable-next-line:no-inferrable-types
  lastId: number = 0;

  todos: Todo[] = [];

  add(todo: Todo) {
    if (!todo.title) {
      return this;
    }
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  remove(todo: Todo) {
    this.todos = this.todos.filter(e => e.id !== todo.id);
    return this;
  }

  getById(id: number) {
    return this.todos.find(e => e.id === id);
  }

  update(todo: Todo, value: object = {}) {
    if (!todo) {
      return null;
    }
    Object.assign(todo, value);
    return todo;
  }

  toggle(todo: Todo) {
    this.update(todo, {
      isDone: !todo.isDone
    });
    return todo;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  constructor() { }
}
