import { Injectable, signal } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class Bookservices {
 books: any[] = [
  {
      id: '12',
      title: 'Hot tiktok',
      image: 'img/ebook10.jpg',
      category: 'MeMe Khác',
      author: 'Bé Bin',
      description: 'MeMe Tiktok',
      pages: 300,
      price: 100000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Không có',
    },
    {
      id: '0',
      title: 'Tony Tony Chopper',
      image: 'img/ebook1.jpg',
      category: 'MeMe Anime',
      author: 'Eiichiro Oda',
      description:
        'Chopper là một con tuần lộc đã ăn trái Ác Quỷ Hito Hito no Mi, một loại trái cho phép người dùng biến hình thành dạng lai giữa người và tuần lộc theo ý muốn. Cậu được hai người thầy là Bác sĩ Hiriluk và Bác sĩ Kureha dạy y học trên Đảo Trống. Chopper có ước mơ đi khắp thế giới với hy vọng có thể chữa được mọi loại bệnh tật.',
      pages: 236,
      price: 60000,
      discount: '15',
      stock: 50,
      publishDate: '2023',
      translator: 'Chưa xác định',
    },
     {
      id: '8',
      title: 'MeMe Vui',
      image: 'img/ebook9.jpg',
      category: 'MeMe Roblox',
      author: 'Roblox',
      description: 'Roblox là một tựa game bên trong có nhiều map để giải trí',
      pages: 357,
      price: 52000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
     {
      id: '13',
      title: 'Gojo Satoru',
      image: 'img/ebook14.jpg',
      category: 'MeMe Anime',
      author: 'Gege Akutami',
      description:
        'Nhân vật chính là Itadori Yuji, một học sinh bình thường vô tình nuốt phải ngón tay của Sukuna – lời nguyền mạnh nhất – và trở thành vật chứa của hắn.Anh được thầy Gojo Satoru đưa đến Trường Chú thuật Tokyo (Tokyo Jujutsu High) để học cách kiểm soát và chiến đấu.',
      pages: 86,
      price: 20000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
    {
      id: '5',
      title: 'Meo Meo Cute',
      image: 'img/ebook6.png',
      category: 'MeMe Mèo',
      author: 'Meo Meo',
      description: 'Con mèo dễ thương cute ',
      pages: 347,
      price: 51000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
    {
      id: '1',
      title: 'Manbo',
      image: 'img/ebook2.jpeg',
      category: 'MeMe Anime',
      author: 'Game Design',
      description: 'Ngựa bất khả chiến bại',
      pages: 417,
      price: 92000,
      discount: '15',
      stock: 50,
      publishDate: '2023',
      translator: 'Chưa xác định',
    },
    
    {
      id: '2',
      title: 'Manbo',
      image: 'img/ebook3.jpeg',
      category: 'MeMe Anime',
      author: 'Game Design',
      description: 'Ngựa bất khả chiến bại',
      pages: 583,
      price: 134000,
      discount: '15',
      stock: 50,
      publishDate: '2023',
      translator: 'Chưa xác định',
    },
    {
      id: '3',
      title: 'Doma Umaru',
      image: 'img/ebook4.png',
      category: 'MeMe Anime',
      author: 'Doga Kobo',
      description:
        'Umaru bình thường (bên ngoài)Cao ráo, xinh đẹp, học sinh gương mẫu.Học giỏi, thể thao tốt, được gọi là “Umaru-chan hoàn hảo”.Umaru mini (ở nhà)khi về đến nhà, cô biến thành phiên bản “chibi” nhỏ xíu, đeo áo choàng cam hình hamster.Rất lười biếng, mê game, manga, anime, ăn snack và uống nước ngọt.Đây là lý do cô được gọi là “Himouto” (干物妹) — nghĩa là “cô em gái khô khan / lười biếng trong nhà”.',
      pages: 334,
      price: 64000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
    {
      id: '4',
      title: 'Meo Meo Loading',
      image: 'img/ebook5.png',
      category: 'MeMe Mèo',
      author: 'Meo Meo',
      description: 'Con mèo đang loading',
      pages: 204,
      price: 41000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
    
    {
      id: '6',
      title: 'Meo Meo Tức Giận',
      image: 'img/ebook7.png',
      category: 'MeMe Mèo',
      author: 'Meo Meo',
      description: 'Con mèo tức giận vì không muốn đi đâu',
      pages: 177,
      price: 63000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
    {
      id: '7',
      title: 'Meo Meo Dễ Thương',
      image: 'img/ebook8.jpg',
      category: 'MeMe Mèo',
      author: 'Meo Meo',
      description: 'Con mèo dễ thương',
      price: 38000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
   
    
    {
      id: '9',
      title: 'Sammy',
      image: 'img/ebook11.jpg',
      category: 'MeMe Roblox',
      author: 'Sammy',
      description: 'Roblox là một tựa game bên trong có nhiều map để giải trí',
      pages: 389,
      price: 56000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
    {
      id: '10',
      title: 'MeMe Chạy',
      image: 'img/ebook12.jpg',
      category: 'MeMe Roblox',
      author: 'Roblox',
      description: 'Roblox là một tựa game bên trong có nhiều map để giải trí',
      pages: 506,
      price: 74000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
    {
      id: '11',
      title: 'MeMe Ngầu',
      image: 'img/ebook13.jpg',
      category: 'MeMe Roblox',
      author: 'Roblox',
      description: 'Roblox là một tựa game bên trong có nhiều map để giải trí',
      pages: 210,
      price: 28000,
      discount: '1%',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
    
   
    {
      id: '14',
      title: 'Me Me Mèo',
      image: 'img/ebook15.jpg',
      category: 'MeMe Mèo',
      author: 'Meo Meo',
      description: 'Con mèo bất lực',
      pages: 346,
      price: 63000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Chưa xác định',
    },
    {
      id: '15',
      title: 'Me Me Dog',
      image: 'img/ebook16.png',
      category: 'MeMe Khác',
      author: 'Dog',
      description: 'Hai chú chó đang đánh nhau',
      pages: 300,
      price: 79000,
      discount: '15',
      stock: 50,
      publishDate: '2024',
      translator: 'Không có',
    },
  ];
   categories: any[] = [
    { name: 'TẤT CẢ EBOOK', icon: '' },
    { name: 'MeMe Anime', icon: 'img/logothumuc1.png' },
    { name: 'MeMe Mèo', icon: 'img/logothumuc2.png' },
    { name: 'MeMe Roblox', icon: 'img/logothumuc3.png' },
    { name: 'MeMe Khác', icon: 'img/logothumuc4.png' },
  ];
  allBooks = signal<Book[]>(this.books);
  getBooks(): Book[] {
    return this.books;
  }
  getCategories(): any[] {
    return this.categories;
  }
  getBookId( id : string){
    return this.books.find(book => book.id === id);
  }
  
  searchBook(query: string) {
    let lower = query.toLowerCase().trim();
    if (!lower || lower == 'tất cả ebook') {
      this.allBooks.set(this.books);
      return;
    } else {
      this.allBooks.set(
        this.books.filter((book) => book.title.toLowerCase().includes(lower.toLowerCase()))
      );
      this.allBooks.set(
        this.books.filter(
          (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(lower)
            || book.category.toLowerCase().includes(lower)
        )
      );
    }
  }
}
