import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {OffresEmploiComponentComponent} from "./offres-emploi-component/offres-emploi-component.component";
import {ArticlesComponentComponent} from "./articles-component/articles-component.component";

import {NotfoundComponent} from "./notfound/notfound.component";
import {DetailprodComponent} from "./detailprod/detailprod.component";
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';
const routes: Routes = [
  {path:'',redirectTo:'Product',pathMatch:"full"},
  {path:'Product', component:ProductComponent},
  {path:'Offre', component:OffresEmploiComponentComponent},
  {path:'Article', component:ArticlesComponentComponent},
  {path:'detail/:id', component:DetailprodComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'formTP', component:TemplateDrivenFormComponentComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
