import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [AuthFormComponent, CommonModule]
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(data: { email: string, password: string }) {
    this.authService.login(data).subscribe(
      response => {
        this.authService.saveUserData(response);
        this.router.navigate(['/dashboard']); // Redirigir tras login exitoso
      },
      error => {
        console.error('Error en el login:', error);
        alert('Credenciales incorrectas');
      }
    );
  }
}