import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  
  {path:'users', component:UserListComponent},
  {path:'users/:id',component:UserDetailComponent},
  {path:'todos/:id',component:TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
