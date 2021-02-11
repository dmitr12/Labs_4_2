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

    this.interactionService.changePosition.subscribe(() => {
      if (this.selectedId == -1 ||
        this.dataCompaniesService.data.indexOf(this.dataCompaniesService.data.filter((s: { id: number; }) => s.id == this.selectedId)[0]) + 1 == this.dataCompaniesService.data.length) {
        if (this.dataCompaniesService.data[0]) {
          this.selectedId = this.dataCompaniesService.data[0].id;
        }
      } else {
        this.selectedId = this.dataCompaniesService.data[this.dataCompaniesService.data.indexOf(this.dataCompaniesService.data.filter((s: { id: number; }) => s.id == this.selectedId)[0]) + 1].id;
      }
      console.log(this.selectedId);
      this.onState.emit(this.selectedId);
    });
  }

  clickCompany(event: any) {
    this.selectedId = event.target.id;
    this.onState.emit(event.target.id);
  }
}
