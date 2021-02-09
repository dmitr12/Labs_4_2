import {Component, Input, OnInit} from '@angular/core';
import {InteractionServiceService} from '../interaction-service.service';
import {DataStudentService} from '../data-student.service';

@Component({
  selector: 'app-del-student',
  templateUrl: './del-student.component.html',
  styleUrls: ['./del-student.component.css']
})
export class DelStudentComponent implements OnInit {

  @Input() selectedStudent: any;

  constructor(public interactionService: InteractionServiceService,
              public dataStudentService: DataStudentService) { }

  ngOnInit(): void {
  }

  delStudent(){
    this.dataStudentService.delStudent(this.selectedStudent.id);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancel();
  }

}
