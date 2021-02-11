import {Company} from './company';
import {Student} from './student';

export class EventModel {

  constructor(id: number, date: string, text: string, company: any, student: any) {
    this.id = id;
    this.date = date;
    this.text = text;
    this.company = company;
    this.student = student;
  }

  id: number;
  date: string;
  text: string;
  company: any;
  student: any;
}
