"use client"

import { makeAutoObservable, action } from 'mobx';

class AuthStore {
  isAuthorized: boolean = false;
  token: string | null = null;
  user: any = null;
  errorMessage: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  login = action(async (email: string, password: string) => {
    try {
      const API_URL = 'https://api.vertical.chulakov.dev';
      const requestBody = {
        email,
        password,
      };

      //console.log('Request body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch(`${API_URL}/api/auth/signin/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        //console.log('Response data:', data);
        this.isAuthorized = true;
        this.token = data.token;
        this.user = data.user;
        this.errorMessage = null;
        sessionStorage.setItem('token', this.token);
      } else {
        const errorResponse = await response.json();
        //console.log('Error response:', errorResponse);
        //console.log('Error message:', errorResponse.message);
        this.errorMessage = errorResponse.message || 'Ошибка авторизации';
      }
    } catch (error) {
      console.error('Login Error:', error);
      this.errorMessage = 'Login failed';
    }
  });

  refreshToken = action(async () => {
    try {
      const API_URL = 'https://api.vertical.chulakov.dev';

      const response = await fetch(`${API_URL}/api/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      //console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        console.log('Response data:', data);
        this.token = data.token;
      } else {
        const errorResponse = await response.json();
        //console.log('Error response:', errorResponse);
        //console.log('Error message:', errorResponse.message);
        this.errorMessage = errorResponse.message || 'Ошибка обновления токена';
      }
    } catch (error) {
      //console.error('Refresh Token Error:', error);
      this.errorMessage = 'Failed to refresh token';
    }
  });

  logout = action(() => {
    this.isAuthorized = false;
    this.token = null;
    this.user = null;
    this.errorMessage = null;
    sessionStorage.removeItem('token');
  });
}

const authStore = new AuthStore();
export default authStore;