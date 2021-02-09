import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-companiesevent',
  templateUrl: './companiesevent.component.html',
  styleUrls: ['./companiesevent.component.css']
})
export class CompanieseventComponent implements OnInit {

  @Input() selectedCompany: any;
  @Input() selectedCompanyEvents: any;

  constructor() { }

  ngOnInit(): void {
  }

}
