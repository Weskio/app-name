import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { FormsModule } from '@angular/forms';
import { Todo2Component } from "./todo-2/todo-2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TodoListComponent, FormsModule, Todo2Component]
})
export class AppComponent {
  title = 'app-name';
}
