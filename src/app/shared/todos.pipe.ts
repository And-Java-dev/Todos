import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../todos/todos.service';

@Pipe({
  name: 'todosFilter'
})
export class TodosPipe implements PipeTransform{
  transform(todos: Todo[], search:string= ''): Todo[] {
    if (!search.trim()){
      return todos
    }
    return todos.filter(todo => {
      if (todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1){
        return   todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1

      }
      // return todo.date.toString().indexOf(search) !== -1
    })
  }

}
