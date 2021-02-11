import {Component, Input, OnInit} from '@angular/core';
import {DataCompaniesService} from '../data-companies.service';
import {DatePipe} from '@angular/common';
import {DataStudentService} from '../data-student.service';
import {InteractionServiceService} from '../interaction-service.service';
import {DataEventsService} from '../data-events.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventModel} from '../models/event';

@Component({
  selector: 'app-upd-event',
  templateUrl: './upd-event.component.html',
  styleUrls: ['./upd-event.component.css']
})
export class UpdEventComponent implements OnInit {

  @Input() selectedEvent: any;
  formUpd: any;
  date = new Date();

  constructor(public dataCompaniesService: DataCompaniesService, public datepipe: DatePipe,
              public dataStudentService: DataStudentService, private interactionService: InteractionServiceService,
              public dataEventsService: DataEventsService) { }

  ngOnInit(): void {

    this.dataCompaniesService.data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.formUpd = new FormGroup({
      date: new FormControl(this.selectedEvent?.date, [Validators.required]),
      text: new FormControl(this.selectedEvent?.text, [Validators.required]),
      student: new FormControl(this.selectedEvent?.student?.id, [Validators.required]),
      company: new FormControl(this.selectedEvent?.company?.id)
    });
  }

  updEvent() {
    let newId = Date.now() % (10 * 365 * 24 * 60 * 60 * 1000);
    let company = this.dataCompaniesService.data.filter(c => c.id == this.formUpd.value.company)[0];
    let student = this.dataStudentService.data.filter(st => st.id == this.formUpd.value.student)[0];
    let event = new EventModel(this.selectedEvent.id, this.formUpd.value.date.toString(), this.formUpd.value.text,
      company === undefined ? null : company, student);
    this.dataEventsService.updEvent(event);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancelEvents();
  }
}
