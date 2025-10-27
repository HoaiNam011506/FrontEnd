import { Component, computed, inject, OnInit } from '@angular/core';
import { CartService } from '../services/cart';
import { FormsModule } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-cart',
  imports: [FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart implements OnInit {
  active: boolean = false;
  private cartService = inject(CartService);
  // nếu cartService.carts là signal, gọi carts() trong template
  carts = this.cartService.carts;
  // Tăng số lượng
  increaseQuantity(item: any): void {
    this.cartService.updateCartQuantity(item, item.quantity + 1);
  }

  // Giảm số lượng
  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      this.cartService.updateCartQuantity(item, item.quantity - 1);
    }
  }
  // Xóa khỏi giỏ hàng
  remoItem(item: any): void {
    this.cartService.removeFromCart(item);
  }
  //
  toggbuy(item: any) {
    this.cartService.toggleActive(item);
  }
  // Tính tổng tiền
  toggbuyAll(active: boolean) {
    this.cartService.toggleActiveAll(active);
  }
  OnselectAllChange(event: Event): void {
    const Checked = (event.target as HTMLInputElement).checked;
    this.toggbuyAll(Checked);
  }
  // tất cả đã được chọn hay chưa
  allSelected = computed(() => {
    return this.carts().length > 0 && this.carts().every((item) => item.active);
  });
  ngOnInit(): void {
    // cuộn lên đầu trang
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
  // Tính tổng tiền
  totalPrice = computed(() => 
     this.carts()
      .filter((item) => item.active)
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
}
