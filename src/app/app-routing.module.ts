import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';

import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CordComponent } from './components/cord/cord.component';
import { YarnComponent } from './components/yarn/yarn.component';




const routes:Routes=[
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  //{path: 'products', component: ProductsComponent},
  {path:'cord', component:CordComponent},
  {path:'yarn', component:YarnComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppRoutingModule { }
