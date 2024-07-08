import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { User } from '../../../models/todo';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users:User[]=[];
constructor(private ts:TodosService){}
  ngOnInit(): void {
  this.ts.getUsers().subscribe(u=>{
    this.users=u;
  })
  }


}
