import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataStudentService} from '../data-student.service';
import {InteractionServiceService} from '../interaction-service.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(public studentService: DataStudentService,
              public interactionService: InteractionServiceService) {
  }

  @Output() onState = new EventEmitter<number>();
  selectedId = -1;

  ngOnInit(): void {
    this.interactionService.cancel.subscribe(() => {
      this.selectedId = -1;
    });
  }

  clickStudent(event: any) {
    this.selectedId = event.target.id;
    this.onState.emit(event.target.id);
  }
}
