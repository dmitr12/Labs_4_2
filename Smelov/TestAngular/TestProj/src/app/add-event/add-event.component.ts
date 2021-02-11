import {Component, OnInit} from '@angular/core';
import {DataCompaniesService} from '../data-companies.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {DataStudentService} from '../data-student.service';
import {InteractionServiceService} from '../interaction-service.service';
import {EventModel} from '../models/event';
import {DataEventsService} from '../data-events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  formAdd: any;
  date = new Date();

  constructor(public dataCompaniesService: DataCompaniesService, public datepipe: DatePipe,
              public dataStudentService: DataStudentService, private interactionService: InteractionServiceService,
              public dataEventsService: DataEventsService) {
  }

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

    this.formAdd = new FormGroup({
      date: new FormControl(this.datepipe.transform(new Date, 'yyyy-MM-dd'), [Validators.required]),
      text: new FormControl(null, [Validators.required]),
      student: new FormControl(null, [Validators.required]),
      company: new FormControl(null)
    });
  }

  addSEvent() {
    let newId = Date.now() % (10 * 365 * 24 * 60 * 60 * 1000);
    let company = this.dataCompaniesService.data.filter(c => c.id == this.formAdd.value.company)[0];
    let student = this.dataStudentService.data.filter(st => st.id == this.formAdd.value.student)[0];
    let event = new EventModel(newId, this.formAdd.value.date.toString(), this.formAdd.value.text,
      company === undefined ? null : company, student);
    this.dataEventsService.addEvent(event);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancelEvents();
  }
}
