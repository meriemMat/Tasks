import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  title : string
  description : string
  reminder : boolean
  showAddTask : boolean
  subscription: Subscription;

  @Output() save : EventEmitter<Task> = new EventEmitter()
  
  constructor(private uiService : UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
   }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
  onSubmit(){
    if(!this.title )
    {
      alert('pleaze add a task')
      return
    }
    const newTask ={
      title : this.title,
      description : this.description,
      reminder : this.reminder
    }

    this.save.emit(newTask)
    this.title = '';
    this.description  = '';
    this.reminder = false;
  }

}
