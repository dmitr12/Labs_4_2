import {Component, Input, OnInit} from '@angular/core';
import {InteractionServiceService} from '../interaction-service.service';
import {DataStudentService} from '../data-student.service';
import {DataCompaniesService} from '../data-companies.service';

@Component({
  selector: 'app-del-company',
  templateUrl: './del-company.component.html',
  styleUrls: ['./del-company.component.css']
})
export class DelCompanyComponent implements OnInit {

  @Input() selectedCompany: any;

  constructor(public interactionService: InteractionServiceService,
              public dataCompaniesService: DataCompaniesService) { }

  ngOnInit(): void {
  }

  delCompany(){
    this.dataCompaniesService.delCompany(this.selectedCompany.id);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancel();
  }
}
