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
    DelCompanyComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
