import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from "@angular/forms";
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailprodComponent } from './detailprod/detailprod.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

@NgModule({
  declarations: [
    AppComponent,

    ProductComponent,
    OffresEmploiComponentComponent,
    ArticlesComponentComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailprodComponent,
    AddProductComponent,
    TemplateDrivenFormComponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
