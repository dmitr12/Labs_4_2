import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DataEventsService} from '../data-events.service';
import {InteractionServiceService} from '../interaction-service.service';
import {UpdStudentComponent} from '../upd-student/upd-student.component';
import {AddStudentComponent} from '../add-student/add-student.component';
import {AddEventComponent} from '../add-event/add-event.component';
import {UpdEventComponent} from '../upd-event/upd-event.component';
import {DelEventComponent} from '../del-event/del-event.component';
import {DataCompaniesService} from '../data-companies.service';
import {DataStudentService} from '../data-student.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @ViewChild('formComponent', {static: true, read: ViewContainerRef}) formRef: any;

  isHide = false;
  matSelected = 'date';
  inputValue = '';
  events: any;
  companies: any;

  constructor(public dataEventsService: DataEventsService, private interactionService: InteractionServiceService,
              private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {

    this.events = this.dataEventsService.data;
    
    this.interactionService.cancelEvents.subscribe(() => {
      this.events = this.dataEventsService.data;
      this.inputValue = '';
      this.matSelected = 'date';
      this.formRef?.clear();
      this.isHide = false;
    });
  }

  btnPanelAdd() {
    this.isHide = true;
    const factory = this.resolver.resolveComponentFactory(AddEventComponent);
    const ref = this.formRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelUpd(id: any) {
    this.isHide = true;
    const factory = this.resolver.resolveComponentFactory(UpdEventComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedEvent = this.dataEventsService.data.filter(e => e.id == id)[0];
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelDel(id: any) {
    this.isHide = true;
    const factory = this.resolver.resolveComponentFactory(DelEventComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedEvent = this.dataEventsService.data.filter(e => e.id == id)[0];
    ref.changeDetectorRef.detectChanges();
  }

  filterSelectChanged(e: any) {
    this.events = this.dataEventsService.data;
    this.inputValue = '';
  }

  changeInputFilter($event: Event) {
    switch (this.matSelected) {
      case 'date': {
        if (this.inputValue === '') {
          this.events = this.dataEventsService;
        } else {
          this.events = this.dataEventsService.data.filter(ev => ev.date == this.inputValue);
        }
        break;
      }
      case 'text': {
        this.events = this.dataEventsService.data.filter(ev => ev.text.toLowerCase().includes(this.inputValue.toLowerCase()));
        break;
      }
    }
  }
}
