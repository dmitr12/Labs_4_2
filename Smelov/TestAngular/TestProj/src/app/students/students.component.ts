import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DataStudentService} from '../data-student.service';
import {DataEventsService} from '../data-events.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InteractionServiceService} from '../interaction-service.service';
import {AddStudentComponent} from '../add-student/add-student.component';
import {UpdStudentComponent} from '../upd-student/upd-student.component';
import {Message} from '../models/Message';
import {DelStudentComponent} from '../del-student/del-student.component';
import {AddSdtudentEventComponent} from '../add-sdtudent-event/add-sdtudent-event.component';
import {StudentseventComponent} from '../studentsevent/studentsevent.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  constructor(public studentService: DataStudentService, public eventsService: DataEventsService,
              public interactionService: InteractionServiceService, private resolver: ComponentFactoryResolver) {
  }

  selectedStudent: any = null;
  selectedStudentEvents: any = null;
  isHideBtnPanel = false;

  @ViewChild('formComponent', {static: true, read: ViewContainerRef}) formRef: any;
  @ViewChild(StudentseventComponent, {static: false})
  private studentEventsComponent: StudentseventComponent | undefined;

  ngOnInit(): void {
    this.interactionService.cancel.subscribe(() => {
      this.isHideBtnPanel = false;
      this.formRef?.clear();
      this.selectedStudent = null;
    });
    this.interactionService.upd.subscribe((student) => {
      this.selectedStudent = student;
    });
  }

  btnPanelAdd() {
    this.isHideBtnPanel = true;
    const factory = this.resolver.resolveComponentFactory(AddStudentComponent);
    const ref = this.formRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  onStudentListChanged(idStudent: any) {
    this.studentEventsComponent?.clearFormContainer();
    this.selectedStudent = this.studentService.data.filter(student => student.id == idStudent)[0];
    this.selectedStudentEvents = this.eventsService.data.filter(e => e.student.id == idStudent);
  }

  btnPanelEdit() {
    this.isHideBtnPanel = true;
    const factory = this.resolver.resolveComponentFactory(UpdStudentComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedStudent = this.selectedStudent;
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelDelete() {
    this.isHideBtnPanel = true;
    const factory = this.resolver.resolveComponentFactory(DelStudentComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedStudent = this.selectedStudent;
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelPosition() {
    this.interactionService.sendChangePosition();
  }
}
