import {Component, OnInit} from '@angular/core';
import {Image, Todo, TodosService} from '../todos/todos.service';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.scss']
})
export class FormTodoComponent implements OnInit {
  title: string = '';
  todo: Todo = null;
  imageName: string = '';

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  addTodo() {
    // const image: Image = {
    //   id: this.todosService.selectedFile,
    //   imagePath: this.imageName
    // }

    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date(),
    };

    this.todosService.create(todo).subscribe(() => {
      this.title = '';
      this.todo = todo;
      this.todo.image = todo.image
      this.todosService.getAllTodos().subscribe(() => {
      });
    });

    this.addTodoImage(todo.id);
    // this.todosService.
    // });
  }

  addTodoImage(id:number) {
   this.todosService.update(id)
    this.imageName = ''
  }




}
