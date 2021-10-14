import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURLGet = 'https://localhost:5001/api/post/getposts'
  private apiURLDelete = 'https://localhost:5001/api/post'
  private apiURLToggle = 'https://localhost:5001/api/post'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {

    return this.http.get<Task[]>(this.apiURLGet)
    /* const tasks = of (TASKS)  //case of using mock-tasks
   return tasks; */
  }
  deleteTask(task: Task): Observable<Task> {
   const url=`${this.apiURLDelete}/${task.postId}`
   return this.http.delete<Task>(url)
  }
   toggleReminder(task: Task): Observable<Task> {
    const url=this.apiURLToggle
    task.reminder =!task.reminder
    return this.http.put<Task>(url,task)
   }
}
