import { Component, OnInit, Input } from '@angular/core';
import { BeveragesService } from '../../beverages.service';

@Component({
  selector: 'app-beverage-inthequeue',
  templateUrl: './beverage-inthequeue.component.html',
  styleUrls: ['./beverage-inthequeue.component.css']
})
export class BeverageInthequeueComponent implements OnInit {

  @Input('state') state: any;
  queueItems: any[];

  constructor(private beverageService: BeveragesService) { 

  }

  ngOnInit() {
    this.beverageService.getaddedBeverages().subscribe((data) => {
      this.queueItems = data.filter(item => item.orderState == this.state);
    });
  }

}
