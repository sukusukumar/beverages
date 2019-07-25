import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeveragesService {

  beveragesStates = [1, 2, 3];
  addedBeverages: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  constructor() {
    setInterval(() => {
      const current = this.addedBeverages.value;
      for (let item of current) {
        const currentTime = new Date().getTime();
        const diff = (currentTime - item.OrderCreatedTimeStamp.getTime()) / 1000;
        if (diff > 10 * item.orderState) {
          if (this.beveragesStates.indexOf(item.orderState + 1) > -1) {
            item.orderState += 1;
          }
        }
      }
      this.addedBeverages.next(current);
    }, 5000);
  }

  addBeverage(item) {
    const current = this.addedBeverages.value;
    const updates = [...current, item];
    this.addedBeverages.next(updates);
  }

  getaddedBeverages() {
    return this.addedBeverages.asObservable();
  }

}
