import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
//import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },

  {
    path: 'product-add',
    component: ProductAddComponent
  },

  /*
  {
    path: 'products',
    component: ProductListComponent
  },
  */

  {
    path: 'product-edit/:id',
    component : ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }