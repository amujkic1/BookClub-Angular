import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  signupForm: any
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    
    if (this.password !== this.confirmPassword) {
      alert('Lozinke se ne podudaraju!');
      return;
    }

    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.signup(userData).subscribe({
      next: (res) => {
        console.log('Registracija uspješna:', res);
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.error('Greška pri registraciji:', err);
      }
    });
  }

}