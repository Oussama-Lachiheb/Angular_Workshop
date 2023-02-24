import { Component, OnInit } from '@angular/core';
import {Product} from "../Core/model/product";
import { CalculService } from '../services/calcul.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  titlee : string = 'Product'
  listProduct! : Product[];
  price_max! : number;
  number!:number;
  constructor(private serviceProduct : ProductService,private calculService: CalculService) {

   }

  ngOnInit(): void {
    this.listProduct = this.serviceProduct.products;
this.number=this.calculService.getNumberOf(this.listProduct,"quantity",0);
   
  }
  buy(i:number){
    this.listProduct[i].quantity--;
  }
  like(i:number){
    this.listProduct[i].like++;
  }

}
