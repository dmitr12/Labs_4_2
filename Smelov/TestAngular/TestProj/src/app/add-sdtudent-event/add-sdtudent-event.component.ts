import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataCompaniesService} from '../data-companies.service';
import {DataEventsService} from '../data-events.service';
import {EventModel} from '../models/event';
import {InteractionServiceService} from '../interaction-service.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-add-sdtudent-event',
  templateUrl: './add-sdtudent-event.component.html',
  styleUrls: ['./add-sdtudent-event.component.css']
})
export class AddSdtudentEventComponent implements OnInit {

  @Input() selectedStudent: any;
  formAdd: any;
  date = new Date();

  constructor(public dataCompaniesService: DataCompaniesService, public dataEventsService: DataEventsService,
              public interactionService: InteractionServiceService, public datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      date: new FormControl(this.datepipe.transform(new Date, 'yyyy-MM-dd'), [Validators.required]),
      text: new FormControl(null, [Validators.required]),
      company: new FormControl(null)
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

  addStudentEvent() {
    let newId = Date.now() % (10 * 365 * 24 * 60 * 60 * 1000);
    let company = this.dataCompaniesService.data.filter(c => c.id == this.formAdd.value.company)[0];
    let event = new EventModel(newId, this.formAdd.value.date.toString(), this.formAdd.value.text,
      company === undefined ? null : company, this.selectedStudent);
    this.dataEventsService.addEvent(event);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancelEvents();
  }
}
