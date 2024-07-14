"use client"

import authStore from '../../stores/AuthStore';
import Dashboard from '@/components/Dashboard';

export default function DashboardPage() {
  return (
    <div>
      {authStore.isAuthorized ? <Dashboard /> : <p>You are not authorized to access this page. Please log in.</p>}
    </div>
  );
}