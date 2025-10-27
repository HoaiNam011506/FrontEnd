import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.username && this.email && this.password) {
      alert('Đăng ký thành công!');
      // ✅ Sau khi đăng ký thành công → về trang chủ
      this.router.navigate(['/home']);
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  }
}
