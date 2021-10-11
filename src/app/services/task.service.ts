import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL='https://localhost:5001/api/post/getposts'

  constructor(private http: HttpClient) { }
  
  getTasks(): Observable<Task[]> {
 
    return this.http.get <Task[]>(this.apiURL);
    /* const tasks = of (TASKS)  //case of using mock-tasks
  return tasks; */ 
  }
}
