import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { PanelComponent } from './panel/panel.component';
import { StudentsComponent } from './students/students.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentseventComponent } from './studentsevent/studentsevent.component';
import { CompaniesComponent } from './companies/companies.component';
import { EventsComponent } from './events/events.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentComponent } from './add-student/add-student.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UpdStudentComponent } from './upd-student/upd-student.component';
import { DelStudentComponent } from './del-student/del-student.component';
import { CompanieslistComponent } from './companieslist/companieslist.component';
import { CompanieseventComponent } from './companiesevent/companiesevent.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { UpdCompanyComponent } from './upd-company/upd-company.component';
import { DelCompanyComponent } from './del-company/del-company.component';
import { AddSdtudentEventComponent } from './add-sdtudent-event/add-sdtudent-event.component';
import { UpdStudentEventComponent } from './upd-student-event/upd-student-event.component';
import {DatePipe} from '@angular/common';
import { DelStudentEventComponent } from './del-student-event/del-student-event.component';
import { AddCompanyEventComponent } from './add-company-event/add-company-event.component';
import { UpdCompanyEventComponent } from './upd-company-event/upd-company-event.component';
import { DelCompanyEventComponent } from './del-company-event/del-company-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdEventComponent } from './upd-event/upd-event.component';
import { DelEventComponent } from './del-event/del-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    NavigationComponent,
    PanelComponent,
    StudentsComponent,
    StudentlistComponent,
    StudentseventComponent,
    CompaniesComponent,
    EventsComponent,
    ContactsComponent,
    AddStudentComponent,
    UpdStudentComponent,
    DelStudentComponent,
    CompanieslistComponent,
    CompanieseventComponent,
    AddCompanyComponent,
    UpdCompanyComponent,
    DelCompanyComponent,
    AddSdtudentEventComponent,
    UpdStudentEventComponent,
    DelStudentEventComponent,
    AddCompanyEventComponent,
    UpdCompanyEventComponent,
    DelCompanyEventComponent,
    AddEventComponent,
    UpdEventComponent,
    DelEventComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatSelectModule
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
