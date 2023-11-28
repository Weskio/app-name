import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-2.component.html',
  styleUrl: './todo-2.component.css'
})
export class Todo2Component {

  listArray =[{taskName:'Eat' , isCompleted: true}]

  onSubmit(form: NgForm){
    this.listArray.push({taskName: form.controls['task'].value ,isCompleted:false})
  }

  onDelete(index: number){
    this.listArray.splice(index,1)
  }

}
