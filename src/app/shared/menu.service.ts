import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // private trangHienTaiBehavior = new BehaviorSubject<Number>(0);
  // trang = this.trangHienTaiBehavior.asObservable();

  private subject = new Subject<any>();



  constructor() {
  }

  recivedEvent(inputValue) {
    this.subject.next({
      event: inputValue
    });
  }

  getValue() {
    return this.subject.asObservable();
  }

}
