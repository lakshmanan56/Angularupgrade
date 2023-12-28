import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoInterface } from './model/to-do-interface';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceBasicApproachService {
  private http = inject(HttpClient) 

  fetchTodos(): Observable<ToDoInterface[]> {
    return this.http.get<ToDoInterface[]>('https://jsonplaceholder.typicode.com/todos/');
  }
}
