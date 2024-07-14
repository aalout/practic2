"use client"

import { observer } from 'mobx-react-lite';
import authStore from '../../stores/AuthStore';

const Dashboard = () => {
  if (!authStore.isAuthorized) {
    return <p>You are not authorized to access this page. Please log in.</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {authStore.user?.email || 'User'}!</p> 
      <button onClick={authStore.logout}>Logout</button>
    </div>
  );
};

export default observer(Dashboard);