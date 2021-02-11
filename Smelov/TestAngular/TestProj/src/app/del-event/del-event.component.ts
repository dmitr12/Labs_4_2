import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataEventsService} from '../data-events.service';
import {InteractionServiceService} from '../interaction-service.service';

@Component({
  selector: 'app-del-event',
  templateUrl: './del-event.component.html',
  styleUrls: ['./del-event.component.css']
})
export class DelEventComponent implements OnInit {

  @Input() selectedEvent: any;

  constructor(private dataEventsService: DataEventsService, private interactionService: InteractionServiceService) { }

  ngOnInit(): void {

  }

  delEvent() {
    this.dataEventsService.delEvent(this.selectedEvent?.id);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancelEvents();
  }
}
