import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DelStudentComponent} from '../del-student/del-student.component';
import {StudentsComponent} from '../students/students.component';
import {CompaniesComponent} from '../companies/companies.component';
import {EventsComponent} from '../events/events.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  @ViewChild('container', {static: true, read: ViewContainerRef}) containerRef: any;
  selectedId = -1;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.clickStudents();
  }

  clickStudents() {
    this.selectedId = 0;
    this.containerRef.clear();
    const factory = this.resolver.resolveComponentFactory(StudentsComponent);
    const ref = this.containerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  clickCompanies() {
    this.selectedId = 1;
    this.containerRef.clear();
    const factory = this.resolver.resolveComponentFactory(CompaniesComponent);
    const ref = this.containerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  clickEvents() {
    this.selectedId = 2;
    this.containerRef.clear();
    const factory = this.resolver.resolveComponentFactory(EventsComponent);
    const ref = this.containerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();  }
}
