import {Component, Input, OnInit} from '@angular/core';
import {DataEventsService} from '../data-events.service';
import {InteractionServiceService} from '../interaction-service.service';

@Component({
  selector: 'app-del-student-event',
  templateUrl: './del-student-event.component.html',
  styleUrls: ['./del-student-event.component.css']
})
export class DelStudentEventComponent implements OnInit {

  @Input() selectedEvent: any;

  constructor(public dataEventsService: DataEventsService, public interactionService: InteractionServiceService) {
  }

  ngOnInit(): void {
  }

  delEvent() {
    this.dataEventsService.delEvent(this.selectedEvent.id);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancelEvents();
  }

}
