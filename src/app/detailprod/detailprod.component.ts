import { Component, OnInit } from '@angular/core';
import {Product} from "../Core/model/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detailprod',
  templateUrl: './detailprod.component.html',
  styleUrls: ['./detailprod.component.css']
})
export class DetailprodComponent implements OnInit {
  id! : number;
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }

}
