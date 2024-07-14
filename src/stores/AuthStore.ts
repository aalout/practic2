"use client"

import { makeAutoObservable, action } from 'mobx';

class AuthStore {
  isAuthorized: boolean = false;
  user: any = null;
  errorMessage: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  login = action(async (email: string, password: string) => {
    try {
      const API_URL = 'https://api.vertical.chulakov.dev';
      const requestBody = {
        email: 'director@mail.tst',
        password: 'secretPassword',
      };
  
      console.log('Request body:', JSON.stringify(requestBody, null, 2));
  
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
        console.log('Response data:', data);
        this.isAuthorized = true;
        this.user = data;
        this.errorMessage = null;
      } else {
        const errorResponse = await response.json();
        console.log('Error response:', errorResponse);
        console.log('Error message:', errorResponse.message);
        this.errorMessage = errorResponse.message || 'Ошибка авторизации';
      }
    } catch (error) {
      console.error('Login Error:', error);
      this.errorMessage = 'Login failed';
    }
  });

  logout = action(() => {
    this.isAuthorized = false;
    this.user = null;
    this.errorMessage = null;
  });
}

const authStore = new AuthStore();
export default authStore;
