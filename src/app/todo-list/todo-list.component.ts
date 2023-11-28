import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  listArray = [{taskName:'Brush teeth',
                isCompleted: false }, 
                {taskName:'Listen to Music',
                isCompleted: false }
              ]

                onSubmit(form: NgForm){
                  this.listArray.push({taskName: form.controls['task'].value, isCompleted: false})
                }

                onDelete(index: number){
                  this.listArray.splice(index,1)
                }

}
