import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../core/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() p !:Product;
  constructor() { }


  ngOnInit(): void {
  }

}
