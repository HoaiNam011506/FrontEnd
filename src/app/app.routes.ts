import { Routes } from '@angular/router';
import { Bookdetail } from './bookdetail/bookdetail';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { LoginComponent } from './form/login/login';
import { RegisterComponent } from './form/register/register';



export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Trang chủ',
  },
  {
    path: 'book/:id',
    component: Bookdetail,
    title: 'Chi tiết sách',
  },
  {
    path: 'cart',
    component: Cart,
    title: 'Giỏ hàng',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Đăng nhập',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Đăng ký',
  },
];
