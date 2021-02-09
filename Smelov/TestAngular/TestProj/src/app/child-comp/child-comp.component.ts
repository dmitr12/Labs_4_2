import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter, Input} from '@angular/core';
@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor() { }

  @Input() userName: string | undefined;
  ngOnInit(): void {
  }
}
