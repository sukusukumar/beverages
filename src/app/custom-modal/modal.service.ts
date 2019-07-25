import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modal: any;

  setModal(modal: any) {
    this.modal = modal;
  }

  openModal() {
    this.modal.open();
  }

  constructor() { }
}
