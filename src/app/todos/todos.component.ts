import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Todo, TodosService} from './todos.service';
import {delay} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {FormTodoComponent} from '../form-todo/form-todo.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {


  public loading: boolean = true;
  public searchString = ''
  todos: Todo [] = [];
  dSub: Subscription;
  pSub: Subscription;

  constructor(public todosService: TodosService) {
  }

  ngOnInit() {
   this.pSub = this.todosService.getAllTodos()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false;
      });
  };


  onChange(id: number) {
    this.todosService.onToggle(id);
  }


  remove(id: number) {
   this.dSub = this.todosService.remove(id).subscribe(() => {
      this.todosService.todos = this.todosService.todos.filter(todo => todo.id !== id)
    })

  }

  ngOnDestroy(): void {
    if (this.dSub){
      this.dSub.unsubscribe()
    }
    if (this.pSub){
      this.pSub.unsubscribe()
    }
  }

}
