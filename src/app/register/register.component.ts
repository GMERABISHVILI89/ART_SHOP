import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../User';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = {
    id:1,
    userName: '',
    email: '',
    password: '',
    tin:'123',
    address:'111'
  };

  constructor(private router: Router, private userService: UserService) {}

  register(): void {
    this.userService.register(this.user).subscribe(
      (response: User) => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Error registering user:', error);
      }
    );
  }
}
