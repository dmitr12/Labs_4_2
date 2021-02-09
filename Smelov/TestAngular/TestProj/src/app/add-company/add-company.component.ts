import {Component, OnInit} from '@angular/core';
import {DataCompaniesService} from '../data-companies.service';
import {InteractionServiceService} from '../interaction-service.service';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Company} from '../models/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  date = new Date();
  formAdd: any;

  constructor(public dataCompaniesService: DataCompaniesService, private interactionService: InteractionServiceService) {
  }

  ngOnInit(): void {
    this.formAdd = new FormGroup({
      name: new FormControl(null, [Validators.required, this.nameCompanyValidator()])
    });
  }

  addCompany() {
    this.dataCompaniesService.addCompany(new Company(this.dataCompaniesService.data[this.dataCompaniesService.data.length - 1].id + 1,
      this.formAdd.value.name));
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
