import {Component, Input, OnInit} from '@angular/core';
import {InteractionServiceService} from '../interaction-service.service';
import {DataStudentService} from '../data-student.service';
import {DataEventsService} from '../data-events.service';

@Component({
  selector: 'app-del-student',
  templateUrl: './del-student.component.html',
  styleUrls: ['./del-student.component.css']
})
export class DelStudentComponent implements OnInit {

  @Input() selectedStudent: any;

  constructor(public interactionService: InteractionServiceService,
              public dataStudentService: DataStudentService, private dataEventsService: DataEventsService) {
  }

  ngOnInit(): void {
  }

  delStudent() {
    this.dataStudentService.delStudent(this.selectedStudent.id);
    let events = this.dataEventsService.data.filter(e => e.student.id == this.selectedStudent.id);
    events.forEach((item) => {
      this.dataEventsService.delEvent(item.id);
    });
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancel();
  }

}
