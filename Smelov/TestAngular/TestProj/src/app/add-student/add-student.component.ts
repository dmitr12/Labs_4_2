import {AfterContentInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStudentService} from '../data-student.service';
import {Student} from '../models/student';
import {InteractionServiceService} from '../interaction-service.service';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(public dataStudentService: DataStudentService, public interactionService: InteractionServiceService) {
  }

  specialities: any;
  students: any;
  date = new Date();

  formAdd: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    spec: new FormControl(null, [Validators.required]),
    group: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(20)]),
    syear: new FormControl(this.date.getFullYear(), [Validators.required, Validators.max(this.date.getFullYear()),
      Validators.min(this.date.getFullYear() - 10)])
  });

  ngOnInit(): void {
    this.specialities = this.dataStudentService.data_speciality;
    this.students = this.dataStudentService.data;
  }

  addStudent() {
    let newId = Date.now() % (10 * 365 * 24 * 60 * 60 * 1000);
    this.dataStudentService.addStudent(new Student(newId, this.formAdd.value.name,
      this.formAdd.value.spec, this.formAdd.value.group, this.formAdd.value.syear));
    this.dataStudentService.data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancel();
  }

}
