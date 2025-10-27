import { Component, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Bookservices } from '../services/bookservices';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // <-- CommonModule cho *ngIf
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {
  saerch: string = '';
  isLoggedIn = false;
  // dùng tên service rõ ràng
  countCart = computed(() => this.cartService.carts().length);

  constructor(
    private bookService: Bookservices,
    private cartService: CartService,
    private router: Router
  ) {}
ngOnInit(): void {
  if (this.isLoggedIn) {
    this.router.navigate(['/home']);
  }
}
  Onsearch() {
    this.bookService.searchBook(this.saerch || '');
  }

  scrollToSanPham() {
    const element = document.getElementById('sanpham');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onLogout() {
    this.isLoggedIn = false;
    alert('Đăng xuất thành công!');
    this.router.navigate(['/home']);
  }
}
