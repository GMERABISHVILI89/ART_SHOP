import { Component } from '@angular/core';
import { Product } from '../Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product:any | Product;
  productDetail:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService:CartService
  ) {this.getProduct();}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((product: Product) => {
      this.productDetail = product;
      this.productDetail.map((e: any) => {this.product = e.Name});
    });
  }

  addToCart(product: Product): void {
    // let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    // cart.push(product);
    // this.cartService.addToCart(this.product);
    // localStorage.setItem('cart', JSON.stringify(cart));
    this.cartService.addToCart(product);
  }

 
}
