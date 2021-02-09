import {Injectable} from '@angular/core';
import {Student} from './models/student';
import {Company} from './models/company';

@Injectable({
  providedIn: 'root'
})
export class DataCompaniesService {

  constructor() {
  }

  data = [
    {id: 1, name: 'iTechArt'},
    {id: 2, name: 'LeverX'},
    {id: 3, name: 'iSsoft'},
    {id: 4, name: 'EPAM'},
    {id: 5, name: 'IBA'},
    {id: 6, name: 'Wargaming'}
    ];

  addCompany(company: Company) {
    this.data.push(company);
  }

  updCompany(company: Company) {
    let itemIndex = this.data.findIndex(item => item.id == company.id);
    this.data[itemIndex] = company;
  }

  delCompany(idCompany: number) {
    let itemIndex = this.data.findIndex(item => item.id == idCompany);
    this.data.splice(itemIndex, 1);
  }
}
