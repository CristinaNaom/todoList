import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, User } from '../../models/todo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(environment.API_BASE_URL + "/users");
  }
  getUserById(id:string): Observable<User>{
    return this.http.get<User>(environment.API_BASE_URL + "/users/" + id);
  }
  
  getTodos(id:number): Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.API_BASE_URL + "/todos?userId=" + id);
  }
}
