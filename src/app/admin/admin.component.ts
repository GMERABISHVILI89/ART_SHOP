import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports:[FormsModule],
  standalone:true,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  product: Product = {
    id: 0,
    Name: '',
    ImageURL:'',
    Description: '',
    Price: 0,
    Stock: 0
  };

  constructor(private productService: ProductService) {}

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe(() => {
      alert('Product added successfully');
      this.product = {
        id: 0,
        Name: '',
        ImageURL:'',
        Description: '',
        Price: 0,
        Stock: 0
      };
    });
  }
}
