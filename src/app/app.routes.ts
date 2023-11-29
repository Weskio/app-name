import { Routes } from '@angular/router';
import { Todo2Component } from './todo-2/todo-2.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TestTodoComponent } from './test-todo/test-todo.component';

export const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: 'todo-2', component: Todo2Component },
  { path: 'test-todo', component: TestTodoComponent },
];
