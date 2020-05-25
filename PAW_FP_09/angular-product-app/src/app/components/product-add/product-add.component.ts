import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from 'src/app/Models/Product';

@Component({
 selector: 'app-product-add',
 templateUrl: './product-add.component.html',
 styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
  name: string
  description: string
  quantity: number

  @Input() productData: Product = new Product(this.name, this.description, this.quantity);

 constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

 ngOnInit() {

 }

 addProduct() {
 this.rest.addProduct(this.productData).subscribe((result : Product) => {
 console.log(result);
 
 this.router.navigate(['/']);
 }, (err) => {
 console.log(err);
 });
 }
}

