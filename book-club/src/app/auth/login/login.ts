import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: any
  email = '';
  password = '';
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(){
    const userData = {
        email: this.email,
        password: this.password
    };

    console.log(userData)

    this.authService.login(userData).subscribe({
      next: (res) => {
        console.log('Login uspješan:', res);
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.error('Greška pri loginu:', err);
      }
    })

  }

}