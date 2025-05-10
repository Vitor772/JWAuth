import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from '../pages/login/login.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatMenuModule } from '@angular/material/menu'
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatMenuModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authService=inject(AuthService);
  router = inject(Router);
  matSnackBar = Inject(MatSnackBar);

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }


logout = () => {
  this.authService.logout();
  this.matSnackBar.open('Logout succes', "Close", {
    duration:5000,
    horizontalPosition:'center'
  })
  this.router.navigate(['/login'])
};
}
