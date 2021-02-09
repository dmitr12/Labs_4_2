import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Student} from './models/student';

@Injectable({
  providedIn: 'root'
})
export class InteractionServiceService {

  private updSource = new Subject<any>();
  private cancelSource = new Subject();
  cancel = this.cancelSource.asObservable();
  upd = this.updSource.asObservable();

  constructor() {
  }

  sendUpd(element: any){
    this.updSource.next(element);
  }

  sendCancel() {
    this.cancelSource.next();
  }
}
