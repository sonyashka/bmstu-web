export class UserState {
  protected field = 'user_token';

  getToken(): string | null {
    return localStorage.getItem(this.field);
  }

  saveToken(token: string) {
    localStorage.setItem(this.field, token);
  }

  removeToken() {
    localStorage.removeItem(this.field);
  }
}
