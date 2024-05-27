import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  standalone:true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[CommonModule,RouterOutlet, RouterModule,RouterLinkActive]
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';
  cartLength = this.cartService.getCartLengthSignal();
  constructor(private authService: AuthService, private router: Router,private cartService: CartService) {}

  ngOnInit(): void {

  
  }

  logout(): void {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }
}
