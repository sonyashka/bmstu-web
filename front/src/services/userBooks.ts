import { UserState } from 'src/services/UserState';
import { BookService } from 'src/services/Book';

export interface UserBook {
  author: string;
  comment: string;
  id: string;
  status: string;
  title: string;
}

export interface UserBookAdd {
  bookId: string;
  status: string;
  comment: string;
}

export class UserBookService {
  books = [
    {
      author: 'string',
      comment: 'string',
      id: 'string',
      status: 'string',
      title: 'string',
    },
    {
      author: 'Harry Po',
      comment: '',
      id: 'Help me ',
      status: 'ssdfsng',
      title: 'stsdfsdfsdf',
    },
  ];

  protected uss = new UserState();

  protected bs = new BookService();

  getBooks(): Promise<UserBook[]> {
    return new Promise<UserBook[]>((res) => {
      setTimeout(() => {
        res(this.books);
      }, 1000);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async createBook(book: UserBookAdd): Promise<string> {
    return new Promise((res) => {
      setTimeout(async () => {
        this.books = [
          ...this.books,
          {
            ...((await this.bs.getBooks()).find((x) => x.id === book.bookId) || {
              title: 'ede',
              author: 'lol',
            }),
            id: String(Math.random()),
            ...book,
          },
        ];
        res('test');
      }, 1000);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async deleteBook(id: string): Promise<boolean> {
    return new Promise((res) => {
      setTimeout(() => {
        this.books = this.books.filter((b) => b.id !== id);
        res(true);
      }, 1000);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async updateBook(book: UserBook): Promise<boolean> {
    return new Promise((res) => {
      this.books = this.books.map((b) => (b.id === book.id ? book : b));

      setTimeout(() => {
        res(true);
      }, 1000);
    });
  }

  protected getConfig() {
    return {
      headers: {
        Authorization: `Bearer ${this.uss.getToken()}`,
      },
    };
  }
}
