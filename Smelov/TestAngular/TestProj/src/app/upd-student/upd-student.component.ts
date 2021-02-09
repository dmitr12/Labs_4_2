import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Student} from '../models/student';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStudentService} from '../data-student.service';
import {InteractionServiceService} from '../interaction-service.service';
import {Message} from '../models/Message';

@Component({
  selector: 'app-upd-student',
  templateUrl: './upd-student.component.html',
  styleUrls: ['./upd-student.component.css']
})
export class UpdStudentComponent implements OnInit {

  @Input() selectedStudent: any;

  date = new Date();
  specialities: any;

  formUpd: any;

  constructor(public dataStudentService: DataStudentService, public interactionService: InteractionServiceService) {
  }

  ngOnInit(): void {
    this.specialities = this.dataStudentService.data_speciality;

    this.formUpd = new FormGroup({
      name: new FormControl(this.selectedStudent?.name, [Validators.required]),
      spec: new FormControl(this.selectedStudent?.spec, [Validators.required]),
      group: new FormControl(this.selectedStudent?.group, [Validators.required, Validators.min(1), Validators.max(20)]),
      syear: new FormControl(this.selectedStudent?.syear, [Validators.required, Validators.max(this.date.getFullYear()),
        Validators.min(this.date.getFullYear() - 10)])
    });
  }

  updStudent() {
    this.dataStudentService.updStudent(new Student(this.selectedStudent?.id, this.formUpd.value.name,
      this.formUpd.value.spec, this.formUpd.value.group, this.formUpd.value.syear));
    this.interactionService.sendUpd(this.dataStudentService.data.filter(s => s.id == this.selectedStudent.id)[0]);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancel();
  }
}
