import { Component } from '@angular/core';
import { Product } from '../Product';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems)
  }

  ngOnInit(): void {
    // this.cartItems = this.cartService.getCartItems();
    // console.log(this.cartItems)
  
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }
}
