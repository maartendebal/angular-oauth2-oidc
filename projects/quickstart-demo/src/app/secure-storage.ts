import { OAuthSecureStorage } from 'angular-oauth2-oidc';

export class SecureStorage implements OAuthSecureStorage {
  getItem(key: string): Promise<string | null> {
    return Promise.resolve(localStorage.getItem(key));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  setItem(key: string, data: string): void {
    localStorage.setItem(key, data);
  }
}
