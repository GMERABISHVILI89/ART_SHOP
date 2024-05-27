import { Component, Input } from '@angular/core';
import { Product } from '../Product';
import { Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,NgFor ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() product!: Product;

  constructor(private router: Router) {
  }

  viewProduct(): void {
    this.router.navigate(['/product', this.product.id]);
  }
}
