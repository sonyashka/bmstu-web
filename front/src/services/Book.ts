import { api } from 'src/boot/axios';
import { UserState } from 'src/services/UserState';

export interface Book {
  author: string;
  id: string;
  title: string;
}

export class BookService {
  protected uss = new UserState();

  protected api = api;

  async getBooks(): Promise<Book[]> {
    const res = await this.api.get<Book[]>('/book/', this.getConfig());
    return res.data;
  }

  protected getConfig() {
    return {
      headers: {
        Authorization: `Bearer ${this.uss.getToken()}`,
      },
    };
  }
}
