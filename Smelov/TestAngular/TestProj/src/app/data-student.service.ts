import {Injectable} from '@angular/core';
import {Student} from './models/student';

@Injectable({
  providedIn: 'root'
})
export class DataStudentService {

  constructor() {
  }

  data = [
    {id: 1, name: 'Петров П.П.', spec: 'ИСиТ', group: 1, syear: 2016},
    {id: 2, name: 'Иванов И.И.', spec: 'ИСиТ', group: 1, syear: 2016},
    {id: 3, name: 'Сидоров С.С.', spec: 'ПОИТ', group: 4, syear: 2016},
    {id: 4, name: 'Кириллов К.К.', spec: 'ПОИТ', group: 5, syear: 2016},
    {id: 5, name: 'Алексеев А.А.', spec: 'ДЭВИ', group: 9, syear: 2016},
    {id: 6, name: 'Сергеев С.С.', spec: 'ПОИБМС', group: 7, syear: 2017},
    {id: 7, name: 'Михайлов М.М.', spec: 'ПОИБМС', group: 8, syear: 2017},
    {id: 8, name: 'Александров А.А.', spec: 'ПОИБМС', group: 7, syear: 2017},
    {id: 9, name: 'Кислый К.А.', spec: 'ДЭВИ', group: 10, syear: 2017},
    {id: 10, name: 'Прокопеня А.А.', spec: 'ПОИБМС', group: 7, syear: 2017},
    {id: 11, name: 'Ветров А.В.', spec: 'ПОИБМС', group: 8, syear: 2017},
    {id: 12, name: 'Викторов В.В.', spec: 'ИСиТ', group: 3, syear: 2017},
    {id: 13, name: 'Алексей А.А.', spec: 'ПОИБМС', group: 7, syear: 2015},
    {id: 14, name: 'Григорьев  Г.Г.', spec: 'ДЭВИ', group: 9, syear: 2016},
    {id: 15, name: 'Владимиров В.В.', spec: 'ПОИБМС', group: 8, syear: 2017},
    {id: 16, name: 'Петров П.П.', spec: 'ДЭВИ', group: 9, syear: 2017},
    {id: 17, name: 'Юрьев Ю.Ю.', spec: 'ИСиТ', group: 3, syear: 2017},
    {id: 18, name: 'Евгеньев Е.В.', spec: 'ПОИБМС', group: 6, syear: 2018},
    {id: 19, name: 'Валерьев В.В.', spec: 'ПОИБМС', group: 7, syear: 2017},
    {id: 20, name: 'Антонов А.А.', spec: 'ПОИБМС', group: 7, syear: 2017},
    {id: 21, name: 'Афанасьев А.А.', spec: 'ИСиТ', group: 2, syear: 2015},
    {id: 22, name: 'Федоров Ф.Ф.', spec: 'ПОИБМС', group: 7, syear: 2016},
    {id: 23, name: 'Николаев Н.Н.', spec: 'ИСиТ', group: 3, syear: 2017}
  ];

  data_speciality = [
    {name: 'ИСиТ'},
    {name: 'ПОИТ'},
    {name: 'ПОИБМС'},
    {name: 'ДЭВИ'}
  ];

  addStudent(student: Student) {
    this.data.push(student);
  }

  updStudent(student: Student) {
    let itemIndex = this.data.findIndex(item => item.id == student.id);
    this.data[itemIndex] = student;
  }

  delStudent(idStudent: number) {
    let itemIndex = this.data.findIndex(item => item.id == idStudent);
    this.data.splice(itemIndex, 1);
  }
}
