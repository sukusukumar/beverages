import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BeveragesService } from '../beverages/beverages.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  beverageMenuSubscription: Subscription;
  element: ElementRef;
  beveragesMenu: any;
  beverageForm: any;
  isSubmitted: boolean = false;

  constructor(private el: ElementRef, 
    private renderer: Renderer2, 
    private modalService: ModalService, 
    private appService: AppService, 
    private fb: FormBuilder,
    private beverageService: BeveragesService) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.modalService.setModal(this);

    this.beverageMenuSubscription = this.appService.getBeveragesMenu().subscribe(data => {
      this.beveragesMenu = data[0].Beverages;
    });

    this.beverageForm = this.fb.group({
      customer: [null, Validators.required],
      beverage: [null, Validators.required]
    })
  }

  close() {
    this.renderer.setStyle(this.element, "display", "none");
    this.beverageForm.reset();
    this.isSubmitted = false;
  }

  open() {
    this.renderer.setStyle(this.element, "display", "block");
  }

  submit() {
    this.isSubmitted = true;
    const beverage = { ...this.beverageForm.value };
    if(this.beverageForm.valid) {
      const newItem = {
        OrderCreatedTimeStamp: new Date(),
        BeverageBarOrderId: Math.floor(Math.random() * 1000) + 1,
        OrderedBeverage: beverage.beverage,
        customer: beverage.customer,
        orderState: 1
      }
      console.log(newItem);
      this.beverageService.addBeverage(newItem);
      this.close();
    }
  }

}
