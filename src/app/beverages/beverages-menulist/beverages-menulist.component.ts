import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Subscription } from 'rxjs';
import { BeveragesService } from '../beverages.service';

@Component({
  selector: 'app-beverages-menulist',
  templateUrl: './beverages-menulist.component.html',
  styleUrls: ['./beverages-menulist.component.css']
})
export class BeveragesMenulistComponent implements OnInit, OnDestroy {

  beverageMenuSubscription: Subscription;
  beveragesMenu: any;

  constructor(private appService: AppService, private beverageService: BeveragesService) { }

  ngOnInit() {
    this.beverageMenuSubscription = this.appService.getBeveragesMenu().subscribe(data => {
      this.beveragesMenu = data[0].Beverages;
    });
  }

  selectBeverage(beverage: any) {
    
  }

  ngOnDestroy() {
    this.beverageMenuSubscription.unsubscribe();
  }

}
