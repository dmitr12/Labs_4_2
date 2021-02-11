import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataStudentService} from '../data-student.service';
import {InteractionServiceService} from '../interaction-service.service';
import {isBlockScopedBindingElement} from 'tslint';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(public studentService: DataStudentService,
              public interactionService: InteractionServiceService) {
  }

  @Output() onState = new EventEmitter<number>();

  selectedId = -1;
  inputValue = '';
  students: any;
  matSelected = 'name';

  ngOnInit(): void {

    this.studentService.data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    this.students = this.studentService.data;

    this.interactionService.cancel.subscribe(() => {
      this.selectedId = -1;
      this.students = this.studentService.data;
      this.inputValue = '';
    });

    this.interactionService.changePosition.subscribe(() => {
      if (this.selectedId == -1 ||
        this.students.indexOf(this.students.filter((s: { id: number; }) => s.id == this.selectedId)[0]) + 1 == this.students.length) {
        if (this.students[0]) {
          this.selectedId = this.students[0].id;
        }
      } else {
        this.selectedId = this.students[this.students.indexOf(this.students.filter((s: { id: number; }) => s.id == this.selectedId)[0]) + 1].id;
      }
      console.log(this.selectedId);
      this.onState.emit(this.selectedId);
    });
  }

  clickStudent(event: any) {
    this.selectedId = event.target.id;
    this.onState.emit(event.target.id);
  }

  filterSelectChanged(e: any) {
    this.students = this.studentService.data;
    this.inputValue = '';
  }

  changeInputFilter($event: Event) {
    this.selectedId = -1;
    switch (this.matSelected) {
      case 'name': {
        this.students = this.studentService.data.filter(st => st.name.toLowerCase().startsWith(this.inputValue.toLowerCase()));
        break;
      }
      case 'spec': {
        if (this.inputValue === '') {
          this.students = this.studentService.data;
        } else {
          this.students = this.studentService.data.filter(st => st.spec.toLowerCase() == this.inputValue.toLowerCase());
        }
        break;
      }
      case 'syear': {
        if (this.inputValue === '') {
          this.students = this.studentService.data;
        } else {
          this.students = this.studentService.data.filter(st => st.syear.toString().toLowerCase() === this.inputValue.toLowerCase());
        }
        break;
      }
    }
  }
}
