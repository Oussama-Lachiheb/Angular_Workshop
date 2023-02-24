import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../Core/model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  produit! : Product;
  constructor(private ps:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.produit = new Product();
  }
  Ajouter(produit:Product){
this.ps.Ajouter(produit);
this.route.navigateByUrl("/Product")
  }
  
}
