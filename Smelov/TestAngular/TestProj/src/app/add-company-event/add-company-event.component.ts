import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {DataStudentService} from '../data-student.service';
import {InteractionServiceService} from '../interaction-service.service';
import {EventModel} from '../models/event';
import {DataEventsService} from '../data-events.service';

@Component({
  selector: 'app-add-company-event',
  templateUrl: './add-company-event.component.html',
  styleUrls: ['./add-company-event.component.css']
})
export class AddCompanyEventComponent implements OnInit {

  @Input() selectedCompany: any;
  formAdd: any;
  date = new Date();

  constructor(public datepipe: DatePipe, public dataStudentService: DataStudentService,
              public interactionService: InteractionServiceService, public dataEventsService: DataEventsService) {
  }

  ngOnInit(): void {
    this.dataStudentService.data.sort((a, b) => {
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
      student: new FormControl(null, [Validators.required])
    });
  }

  addCompanyEvent() {
    let newId = Date.now() % (10 * 365 * 24 * 60 * 60 * 1000);
    let student = this.dataStudentService.data.filter(st => st.id == this.formAdd.value.student)[0];
    let event = new EventModel(newId, this.formAdd.value.date.toString(), this.formAdd.value.text,
      this.selectedCompany, student);
    this.dataEventsService.addEvent(event);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancelEvents();
  }
}
