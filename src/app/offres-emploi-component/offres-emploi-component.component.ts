import { Component, OnInit } from '@angular/core';
import {Emploi} from "../Core/model/emploi";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  listeEmploi!: Emploi[];
  nbEmploisNonClotures = 0;
  filtre!: string;

  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[
      {reference:"1",titre:"aaa",entreprise:"A",etat:true},
      {reference:"2",titre:"bbb",entreprise:"B",etat:true},
      {reference:"3",titre:"ccc",entreprise:"C",etat:false},
    ]}
    calculerBilan(){
      this.nbEmploisNonClotures = this.listeEmploi.filter(emploi => emploi.etat).length;

  }

}
