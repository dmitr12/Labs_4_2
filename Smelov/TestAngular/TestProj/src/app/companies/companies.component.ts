import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DataCompaniesService} from '../data-companies.service';
import {DataEventsService} from '../data-events.service';
import {InteractionServiceService} from '../interaction-service.service';
import {AddStudentComponent} from '../add-student/add-student.component';
import {UpdStudentComponent} from '../upd-student/upd-student.component';
import {DelStudentComponent} from '../del-student/del-student.component';
import {AddCompanyComponent} from '../add-company/add-company.component';
import {UpdCompanyComponent} from '../upd-company/upd-company.component';
import {DelCompanyComponent} from '../del-company/del-company.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  selectedCompany: any = null;
  selectedCompanyEvents: any = null;
  isHideBtnPanel = false;

  @ViewChild('formComponent', {static: true, read: ViewContainerRef}) formRef: any;

  constructor(public dataCompaniesService: DataCompaniesService,
              public eventsService: DataEventsService,
              public interactionService: InteractionServiceService, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.interactionService.cancel.subscribe(() => {
      this.isHideBtnPanel = false;
      this.formRef.clear();
      this.selectedCompany = null;
    });
    // this.interactionService.updStudent.subscribe((student) => {
    //   this.selectedStudent = student;
    // });
  }

  onCompanyListChanged(idCompany: any) {
    this.selectedCompany = this.dataCompaniesService.data.filter(company => company.id == idCompany)[0];
    this.selectedCompanyEvents = this.eventsService.data.filter(e => e.company?.id == idCompany);
  }

  btnPanelAdd() {
    this.isHideBtnPanel = true;
    const factory = this.resolver.resolveComponentFactory(AddCompanyComponent);
    const ref = this.formRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelEdit() {
    this.isHideBtnPanel = true;
    const factory = this.resolver.resolveComponentFactory(UpdCompanyComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedCompany = this.selectedCompany;
    ref.changeDetectorRef.detectChanges();
  }

  btnPanelDelete() {
    this.isHideBtnPanel = true;
    const factory = this.resolver.resolveComponentFactory(DelCompanyComponent);
    const ref = this.formRef.createComponent(factory);
    ref.instance.selectedCompany = this.selectedCompany;
    ref.changeDetectorRef.detectChanges();
  }

}
