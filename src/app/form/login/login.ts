import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === '123') {
      alert('Đăng nhập thành công!');
      localStorage.setItem('isLoggedIn', 'true');
      // ✅ quay về trang chủ
      this.router.navigate(['/home']);
    } else {
      alert('Sai tên đăng nhập hoặc mật khẩu!');
    }
  }
}
