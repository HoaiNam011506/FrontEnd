import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../services/cart';
import { Bookservices } from '../services/bookservices';

@Component({
  selector: 'app-bookdetail',
  imports: [ RouterModule],
  templateUrl: './bookdetail.html',
  styleUrls: ['./bookdetail.css'],
})
export class Bookdetail implements OnInit {
  bookId = signal<string>('');
  bookDetail = computed(() => this.bookService.getBookId(this.bookId()));
  quantity = signal(1);

  constructor(
    private bookService: Bookservices,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  // khởi tạo computed sau khi bookService đã được gán

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      const id = p['id'];
      console.log('id', id);
      if (id) {
        this.bookId.set(id);
      }
      // cuộn lên đầu trang
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    });
  }
  discountPrice(price: number, discount: number) {
    return price - price * (discount / 100);
  }
  // tăng số lượng
  increaseQuantity() {
    this.quantity.set(this.quantity() + 1);
  }
  // giảm số lượng
  decreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.set(this.quantity() - 1);
    }
  }
addToCart() {
  if (this.bookDetail()) {
    this.cartService.addToCart(this.bookDetail(), this.quantity());
  }
}
}
