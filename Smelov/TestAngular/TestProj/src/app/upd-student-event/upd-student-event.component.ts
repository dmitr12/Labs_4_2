import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {DataCompaniesService} from '../data-companies.service';
import {DataEventsService} from '../data-events.service';
import {InteractionServiceService} from '../interaction-service.service';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {EventModel} from '../models/event';
import {DataStudentService} from '../data-student.service';

@Component({
  selector: 'app-upd-student-event',
  templateUrl: './upd-student-event.component.html',
  styleUrls: ['./upd-student-event.component.css']
})
export class UpdStudentEventComponent implements OnInit {

  @Input() selectedStudent: any;
  @Input() selectedEvent: any;
  date = new Date();
  formUpd: any;

  constructor(public dataCompaniesService: DataCompaniesService, public dataEventsService: DataEventsService,
              public interactionService: InteractionServiceService, public datepipe: DatePipe,
              public dataStudentService: DataStudentService) {
  }

  ngOnInit(): void {

    this.formUpd = new FormGroup({
      date: new FormControl(this.selectedEvent.date, [Validators.required]),
      text: new FormControl(this.selectedEvent?.text, [Validators.required]),
      company: new FormControl(this.selectedEvent?.company?.id)
    });

    this.dataCompaniesService.data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  updStudentEvent() {
    let company = this.dataCompaniesService.data.filter(c => c.id == this.formUpd.value.company)[0];
    let event = new EventModel(this.selectedEvent.id, this.formUpd.value.date, this.formUpd.value.text,
      company === undefined ? null : company, this.selectedStudent);
    this.dataEventsService.updEvent(event);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancelEvents();
  }
}
