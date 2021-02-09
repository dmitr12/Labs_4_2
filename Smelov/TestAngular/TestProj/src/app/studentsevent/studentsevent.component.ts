import {Component, Input, OnInit} from '@angular/core';
import {DataStudentService} from '../data-student.service';
import {Student} from '../models/student';
import {InteractionServiceService} from '../interaction-service.service';

@Component({
  selector: 'app-studentsevent',
  templateUrl: './studentsevent.component.html',
  styleUrls: ['./studentsevent.component.css']
})
export class StudentseventComponent implements OnInit {

  constructor() {
  }

  @Input() selectedStudent: any;
  @Input() selectedStudentEvents: any;

  ngOnInit(): void {

  }

}
