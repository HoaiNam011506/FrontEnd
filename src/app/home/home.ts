import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { Bookservices } from '../services/bookservices';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule ,RouterModule ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  items = [
    { image: 'img/danhmuc1.jpg.jpg' },
    { image: 'img/danhmuc2.jpg' },
    { image: 'img/danhmuc3.jpg' },
  ];
 categories: any[] = [];
  selectedCategory: string = 'TẤT CẢ EBOOK';

  constructor(public bookServices: Bookservices) {}

  ngOnInit(): void {
    this.categories = this.bookServices.getCategories();
    // đảm bảo allBooks có dữ liệu ban đầu
    this.bookServices.allBooks.set(this.bookServices.getBooks());
  }
  selelactCategory(category: any) {
    this.selectedCategory = category;
    this.bookServices.searchBook(this.selectedCategory);
    this.currentPage.set(1);
  }

  discountPrice(price: number, discount: number) {
    return price - price * (Number(discount) / 100);
  }

  // số trang hiện tại (signal)
  currentPage = signal(1);
  // kích thước trang
  pageSize = signal(4);

  // tổng số trang (computed cần gọi this.bookservises.allBooks())
  totalPages = computed(() =>
    Math.max(1, Math.ceil(this.bookServices.allBooks().length / this.pageSize()))
  );

  // danh sách sách ở trang hiện tại
  pagedBooks = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();
    return this.bookServices.allBooks().slice(start, end);
  });

  getPagination(): (number | string)[] {
    const pageNumbers: (number | string)[] = [];
    const total = this.totalPages();
    const current = this.currentPage();

    if (total <= 5) {
      for (let i = 1; i <= total; i++) pageNumbers.push(i);
      return pageNumbers;
    }

    if (current > 3) pageNumbers.push(1, '...');

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) pageNumbers.push(i);

    if (current < total - 2) pageNumbers.push('...', total);

    return pageNumbers;
  }

  // cập nhật trang (hỗ trợ number | string)
  setCurrenPage(page: number | string): void {
    const p = typeof page === 'number' ? page : parseInt(String(page), 10);
    if (Number.isNaN(p)) return;
    const total = this.totalPages();
    if (p < 1 || p > total || p === this.currentPage()) return;
    this.currentPage.set(p);
  }

  // helper để template dùng
  get booksList() {
    return this.pagedBooks();
  }
  
}

