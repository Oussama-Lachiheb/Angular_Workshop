import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  produit! : Product;

  constructor() { }

  ngOnInit(): void {
    this.produit = new Product();
  }
}
