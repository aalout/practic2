"use client"

import Login from '@/components/Login';
import authStore from '../stores/AuthStore';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  return (
    <div>
      {authStore.isAuthorized ? <Dashboard /> : <Login />}
    </div>
  );
}