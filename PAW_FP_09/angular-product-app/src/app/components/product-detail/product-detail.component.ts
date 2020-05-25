import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    var idTemp = this.route.snapshot.params['id'];
    this.rest.getProduct(idTemp).subscribe((data: Product)=>{
      this.product = data
    })
  }

  seeListofProducts(){
    this.router.navigate(['/products']);
  }

}
