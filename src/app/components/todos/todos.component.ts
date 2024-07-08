import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../models/todo';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private ts: TodosService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.ts.getTodos(+id!).subscribe(t => {
      this.todos = t;
    })
  }
}