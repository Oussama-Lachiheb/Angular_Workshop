import { Component, OnInit } from '@angular/core';
import { Payment } from '../Core/model/payment';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {
  payment! : Payment;

  constructor() { }

  ngOnInit(): void {
    this.payment= new Payment();
  }

}
