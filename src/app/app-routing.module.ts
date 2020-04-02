import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';


const routes: Routes = [
  // {
  //   path: '', component: AppComponent, children:[
  //     {path: '', redirectTo: '/', pathMatch: 'full'},
  //     {path: '', component: TodosComponent},
  //     // {path: 'post/:id', component: PostPageComponent}
  //   ]
  // },
  // {
  //   path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
