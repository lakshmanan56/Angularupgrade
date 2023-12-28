import { Injectable } from '@angular/core';
import { ToDoInterface } from './model/to-do-interface';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceClassicApproachService {   
  async fetchTodosClassicApproach(): Promise<ToDoInterface[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos = await response.json();
    return todos;
  }
}
