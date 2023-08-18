import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.signin(this.user).subscribe(
      (response: any) => {
        // Handle successful sign-in
        console.log('User signed in successfully:', response);
      },
      (error: any) => {
        // Handle sign-in error
        console.error('Sign-in error:', error);
      }
    );
  }
}
