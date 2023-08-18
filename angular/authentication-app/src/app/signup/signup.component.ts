import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: ''
  };

  @ViewChild('signupForm') signupForm!: NgForm; // Declare NgForm variable

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.signupForm.form.valid) {
      return; // Form is not valid, do not proceed
    }

    this.authService.signup(this.user).subscribe(
      (response: any) => {
        // Handle successful signup
        console.log('User signed up successfully:', response);
      },
      (error: any) => {
        // Handle signup error
        console.error('Signup error:', error);
      }
    );
  }
}
