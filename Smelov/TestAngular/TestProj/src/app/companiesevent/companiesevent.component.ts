import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {InteractionServiceService} from '../interaction-service.service';
import {DataEventsService} from '../data-events.service';
import {AddSdtudentEventComponent} from '../add-sdtudent-event/add-sdtudent-event.component';
import {AddCompanyEventComponent} from '../add-company-event/add-company-event.component';
import {UpdCompanyEventComponent} from '../upd-company-event/upd-company-event.component';
import {DelCompanyEventComponent} from '../del-company-event/del-company-event.component';

@Component({
  selector: 'app-companiesevent',
  templateUrl: './companiesevent.component.html',
  styleUrls: ['./companiesevent.component.css']
})
export class CompanieseventComponent implements OnInit {

  @Input() selectedCompany: any;
  @Input() selectedCompanyEvents: any;

  @ViewChild('frm', {read: ViewContainerRef}) formRef: any;
  isHide = false;

  constructor(private resolver: ComponentFactoryResolver, public interactionService: InteractionServiceService,
              public dataEventsService: DataEventsService) {
  }

  ngOnInit(): void {
    this.interactionService.cancelEvents.subscribe(() => {
      this.isHide = false;
      this.formRef?.clear();
      this.selectedCompanyEvents = this.dataEventsService.data.filter(e => e.company?.id == this.selectedCompany?.id);
    });
  }

  btnPanelAdd() {
    this.isHide = true;
    const factory = this.resolver.resolveComponentFactory(AddCompanyEventComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedCompany = this.selectedCompany;
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelUpd(id: any) {
    this.isHide = true;
    const factory = this.resolver.resolveComponentFactory(UpdCompanyEventComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedCompany = this.selectedCompany;
    ref.instance.selectedEvent = this.dataEventsService.data.filter(e => e.id == id)[0];
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelDel(id: any) {
    this.isHide = true;
    const factory = this.resolver.resolveComponentFactory(DelCompanyEventComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedEvent = this.dataEventsService.data.filter(e => e.id == id)[0];
    ref.changeDetectorRef.detectChanges();
  }

  clearFormContainer() {
    this.formRef?.clear();
    this.isHide = false;
  }
}
