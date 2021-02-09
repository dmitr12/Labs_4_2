import {Component, Input, OnInit} from '@angular/core';
import {InteractionServiceService} from '../interaction-service.service';
import {DataCompaniesService} from '../data-companies.service';
import {Company} from '../models/company';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {DataEventsService} from '../data-events.service';

@Component({
  selector: 'app-upd-company',
  templateUrl: './upd-company.component.html',
  styleUrls: ['./upd-company.component.css']
})
export class UpdCompanyComponent implements OnInit {
  @Input() selectedCompany: any;

  date = new Date();
  formUpd: any;

  constructor(public dataCompaniesService: DataCompaniesService, public interactionService: InteractionServiceService,
              public dataEventsService: DataEventsService) {
  }

  ngOnInit(): void {
    this.formUpd = new FormGroup({
      name: new FormControl(this.selectedCompany?.name, [Validators.required, this.nameCompanyValidator()])
    });
  }

  updCompany() {
    this.dataCompaniesService.updCompany(new Company(this.selectedCompany?.id, this.formUpd.value.name));
    this.dataEventsService.data.filter(e => e.company?.id == this.selectedCompany.id).forEach((item) => {
      if (item.company) {
        item.company.name = this.formUpd.value.name;
      }
    });
    this.interactionService.sendUpd(this.dataCompaniesService.data.filter(c => c.id == this.selectedCompany.id)[0]);
    this.cancel();
  }

  cancel() {
    this.interactionService.sendCancel();
  }

  private nameCompanyValidator(): ValidatorFn {
    return (control: AbstractControl): any => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
        return this.dataCompaniesService.data.filter(c => c.name === control.value).length > 0 ? {custom: 'Компания с таким названием уже есть'} : null;
      }
    };
  }
}
