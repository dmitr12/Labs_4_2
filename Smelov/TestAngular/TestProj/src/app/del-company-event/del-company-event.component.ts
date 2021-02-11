import {Component, Input, OnInit} from '@angular/core';
import {DataEventsService} from '../data-events.service';
import {InteractionServiceService} from '../interaction-service.service';

@Component({
  selector: 'app-del-company-event',
  templateUrl: './del-company-event.component.html',
  styleUrls: ['./del-company-event.component.css']
})
export class DelCompanyEventComponent implements OnInit {

  @Input() selectedEvent: any;

  constructor(public dataEventsService: DataEventsService, public interactionService: InteractionServiceService) { }

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
