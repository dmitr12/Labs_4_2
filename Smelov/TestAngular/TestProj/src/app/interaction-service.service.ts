import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Student} from './models/student';

@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {

  private updSource = new Subject<any>();
  private cancelSource = new Subject();
  private cancelEventsSource = new Subject();
  private changePositionSource = new Subject();
  cancel = this.cancelSource.asObservable();
  cancelEvents = this.cancelEventsSource.asObservable();
  upd = this.updSource.asObservable();
  changePosition = this.changePositionSource.asObservable()

  constructor() {
  }

  sendUpd(element: any) {
    this.updSource.next(element);
  }

  sendCancel() {
    this.cancelSource.next();
  }

  sendCancelEvents() {
    this.cancelEventsSource.next();
  }

  sendChangePosition(){
    this.changePositionSource.next();
  }
}
