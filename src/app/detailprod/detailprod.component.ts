import { Component, OnInit } from '@angular/core';
import {Product} from "../Core/model/product";
import {ActivatedRoute} from "@angular/router";
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detailprod',
  templateUrl: './detailprod.component.html',
  styleUrls: ['./detailprod.component.css']
})
export class DetailprodComponent implements OnInit {
  id! : number;
  produit!:Product
  constructor(private route:ActivatedRoute,private prod:ProductService) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.produit=this.prod.products[this.id];
  }

}
