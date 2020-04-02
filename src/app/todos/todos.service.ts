import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';


export interface CreateResponse {
  id: number;
  name: string;
}

export interface Image {
  id: number;
  imagePath: string;
}

export interface Todo {
  id: number;
  title: string;
  date: any;
  completed: boolean;
  image?: Image;

}

@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [];
  selectedFile = null;



  constructor(private http: HttpClient) {
  }

  private static handleError(error: Response | any) {
    console.log('ApiService::handleError', error);
    return Observable.throw(error);
  }

  create(todo: Todo): Observable<Todo> {
    console.log(this.selectedFile)
    return this.http.post(`${environment.dbUrl}`, todo)
      .pipe(map((response: CreateResponse) => {
        return {
          ...todo,
          id: response.id,
          date: new Date(todo.date),
          image:this.selectedFile.valueOf().image
        };

      }));
  }

  public getAllTodos(): Observable<Todo[]> {
    return  this.http.get<Todo[]>(`${environment.dbUrl}all`)
      .pipe(tap(todos => this.todos = todos))
      // .pipe(map((response: {[key: number]: any}) => {
      //   return Object
      //     .keys(response)
      //     .map(key => ({
      //       ...response[key],
      //       id: key,
      //       date: new  Date(response[key].date)
      //     }))
      // }))

  }



  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.dbUrl}${id}`)
  }



  onToggle(id: number) {
    let idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed;
  }
  onFileSelected(event) {
    this.selectedFile = <File> event.target.files[0];
  }

  update(todoId:number){
    const file = new FormData();
    file.append('file', this.selectedFile, this.selectedFile.name)
    return this.http.put(`${environment.dbUrl}${todoId}`,file).subscribe(res =>{
      this.getAllTodos().subscribe( () => {
      })
    })
  }
}
