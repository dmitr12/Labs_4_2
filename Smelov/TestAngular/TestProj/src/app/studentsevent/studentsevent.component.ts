import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DataStudentService} from '../data-student.service';
import {Student} from '../models/student';
import {InteractionServiceService} from '../interaction-service.service';
import {AddStudentComponent} from '../add-student/add-student.component';
import {AddSdtudentEventComponent} from '../add-sdtudent-event/add-sdtudent-event.component';
import {UpdStudentComponent} from '../upd-student/upd-student.component';
import {DataEventsService} from '../data-events.service';
import {UpdStudentEventComponent} from '../upd-student-event/upd-student-event.component';
import {DelStudentEventComponent} from '../del-student-event/del-student-event.component';

@Component({
  selector: 'app-studentsevent',
  templateUrl: './studentsevent.component.html',
  styleUrls: ['./studentsevent.component.css']
})
export class StudentseventComponent implements OnInit {

  constructor(private resolver: ComponentFactoryResolver, public interactionService: InteractionServiceService,
              public dataEventsService: DataEventsService) {
  }

  @Input() selectedStudent: any;
  @Input() selectedStudentEvents: any;

  @ViewChild('frm', {read: ViewContainerRef}) formRef: any;
  isHide = false;

  ngOnInit(): void {
    this.interactionService.cancelEvents.subscribe(() => {
      this.isHide = false;
      this.formRef?.clear();
      this.selectedStudentEvents = this.dataEventsService.data.filter(e => e.student?.id == this.selectedStudent?.id);
    });
  }


  btnPanelAdd() {
    this.isHide = true;
    const factory = this.resolver.resolveComponentFactory(AddSdtudentEventComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedStudent = this.selectedStudent;
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelUpd(id: number) {
    this.isHide = true;
    const factory = this.resolver.resolveComponentFactory(UpdStudentEventComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedStudent = this.selectedStudent;
    ref.instance.selectedEvent = this.dataEventsService.data.filter(e => e.id == id)[0];
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelDel(id: number){
    this.isHide = true;
    const factory = this.resolver.resolveComponentFactory(DelStudentEventComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedEvent = this.dataEventsService.data.filter(e => e.id == id)[0];
    ref.changeDetectorRef.detectChanges();
  }

  clearFormContainer() {
    this.formRef?.clear();
    this.isHide = false;
  }
}
