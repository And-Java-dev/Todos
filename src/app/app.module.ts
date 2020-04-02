import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule} from '@angular/common/http';
import { FormTodoComponent } from './form-todo/form-todo.component';
import {FormsModule} from '@angular/forms';
import {TodosPipe} from './shared/todos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FormTodoComponent,
    TodosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
