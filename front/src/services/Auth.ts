import { api } from 'boot/axios';

export interface User {
  email: string;
  password: string;
}

interface TokenAnswer {
  token: string;
}

export class UserService {
  protected api = api;

  async signIn(user: User): Promise<string> {
    const res = await this.api.post<TokenAnswer>('/auth/sign-in', user);

    if (res.status !== 200) {
      return '';
    }

    return res.data.token;
  }

  async signUp(user: User): Promise<string> {
    await this.api.post('/auth/sign-up', user);

    const res = await this.signIn(user);
    return res;
  }
}
