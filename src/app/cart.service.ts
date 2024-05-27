import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Product } from './Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<Product[]>([]);
  private cartLength = signal<number>(0);

  addToCart(product: Product): void {
    const currentItems = this.cartItems();
    this.cartItems.set([...currentItems, product]);
    this.cartLength.set(this.cartItems().length);

    console.log(product);
    console.log(this.cartLength.length)
  }

  getCartItems(): Product[] {
    return this.cartItems();
  }

  getCartLength(): number {
    return this.cartLength();
  }

  removeFromCart(product: Product): void {
    const currentItems = this.cartItems();
    const updatedItems = currentItems.filter(item => item.id !== product.id);
    this.cartItems.set(updatedItems);
    this.cartLength.set(updatedItems.length);
  }

  getCartLengthSignal() {
    return this.cartLength;
  }
}
