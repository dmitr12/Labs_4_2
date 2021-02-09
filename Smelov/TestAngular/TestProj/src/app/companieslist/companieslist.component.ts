import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataCompaniesService} from '../data-companies.service';
import {InteractionServiceService} from '../interaction-service.service';

@Component({
  selector: 'app-companieslist',
  templateUrl: './companieslist.component.html',
  styleUrls: ['./companieslist.component.css']
})
export class CompanieslistComponent implements OnInit {

  @Output() onState = new EventEmitter<number>();
  selectedId = -1;

  constructor(public dataCompaniesService: DataCompaniesService,
              public interactionService: InteractionServiceService) {
  }

  ngOnInit(): void {
    this.interactionService.cancel.subscribe(() => {
      this.selectedId = -1;
    });
  }

  clickCompany(event: any) {
    this.selectedId = event.target.id;
    this.onState.emit(event.target.id);
  }
}
