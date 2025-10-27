import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Cart } from '../cart/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts = signal<any[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadCart();
  }

  loadCart() {
    if (isPlatformBrowser(this.platformId)) {
      const cartData = localStorage.getItem('cart');
      this.carts.set(cartData ? JSON.parse(cartData) : []);
    }
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.carts()));
  }
  addToCart(product: any, quantity: number) {
    const existingProduct = this.carts().find((item) => item.productId === product.id);
    if (existingProduct) {
      this.carts.update((cartItems) =>
        cartItems.map((item) =>
          item.productId === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      this.carts.update((cartItems) => [
        ...cartItems,
        {
          id: 'c' + (cartItems.length + 1),
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity,
          discount: product.discount,
          image: product.image,
          active: false,
        },
      ]);
    }
    this.saveCart();
    alert(`Thêm vào ${quantity} giỏ hàng thành công`);
    console.log('save cart service', this.carts());
    console.log(JSON.parse(localStorage.getItem('cart')!));
  }

  removeFromCart(item: any): void {
    this.carts.set(this.carts().filter((cartItem) => cartItem.id !== item.id));
    this.saveCart();
  }

  clearCart() {
    this.carts.set([]);
    this.saveCart();
  }

  getCart() {
    return this.carts();
  }
  updateCartQuantity(item: any, quantity: number): void {
    this.carts.update((cartItems) =>
      cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity } : cartItem))
    );
    this.saveCart();
    console.log('update cart service', this.carts());
  }
  toggleActive(item: any): void {
    console.log(item);
    this.carts.update((cartItems) =>
      cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, active: !cartItem.active } : cartItem
      )
    );
    this.saveCart();
  }
  toggleActiveAll(active: boolean) {
    this.carts.update((cartItems) => cartItems.map((item) => ({ ...item, active })));
    this.saveCart();
    console.log('toggle all cart service', this.carts());
  }
}
