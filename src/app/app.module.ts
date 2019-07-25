import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { BeveragesMenulistComponent } from './beverages/beverages-menulist/beverages-menulist.component';
import { BeveragesQueuelistComponent } from './beverages/beverages-queuelist/beverages-queuelist.component';
import { BeverageInthequeueComponent } from './beverages/beverages-queuelist/beverage-queue-item/beverage-inthequeue.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomModalComponent,
    BeveragesMenulistComponent,
    BeveragesQueuelistComponent,
    BeverageInthequeueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
