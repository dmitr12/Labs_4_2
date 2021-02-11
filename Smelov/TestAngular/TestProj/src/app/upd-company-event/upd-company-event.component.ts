import {Component, Input, OnInit} from '@angular/core';
import {DataCompaniesService} from '../data-companies.service';
import {DataEventsService} from '../data-events.service';
import {InteractionServiceService} from '../interaction-service.service';
import {DatePipe} from '@angular/common';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {EventModel} from '../models/event';
import {DataStudentService} from '../data-student.service';

@Component({
  selector: 'app-upd-company-event',
  templateUrl: './upd-company-event.component.html',
  styleUrls: ['./upd-company-event.component.css']
})
export class UpdCompanyEventComponent implements OnInit {

  @Input() selectedCompany: any;
  @Input() selectedEvent: any;
  date = new Date();
  formUpd: any;

  constructor(public dataStudentService: DataStudentService, public dataEventsService: DataEventsService,
              public interactionService: InteractionServiceService, public datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.formUpd = new FormGroup({
      date: new FormControl(this.selectedEvent.date, [Validators.required]),
      text: new FormControl(this.selectedEvent?.text, [Validators.required]),
      student: new FormControl(this.selectedEvent?.student?.id)
    });
  }

  updCompanyEvent() {
    let student = this.dataStudentService.data.filter(st => st.id == this.formUpd.value.student)[0];
    let event = new EventModel(this.selectedEvent.id, this.formUpd.value.date, this.formUpd.value.text,
      this.selectedCompany, student);
    this.dataEventsService.updEvent(event);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancelEvents();
  }

}
