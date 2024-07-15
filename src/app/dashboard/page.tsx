"use client"

import Unauthorized from '@/components/Unauthorized';
import authStore from '../../stores/AuthStore';
import Dashboard from '@/components/Dashboard';

export default function DashboardPage() {
  const token = sessionStorage.getItem('token'); 

  if (token) {
    authStore.token = token;
    authStore.isAuthorized = true; 
    return <Dashboard />; 
  } else {
    return <Unauthorized/>;
  }
}