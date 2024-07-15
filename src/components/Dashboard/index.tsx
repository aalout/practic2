"use client"

import { observer } from 'mobx-react-lite';

const Dashboard = () => {

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, you are logged in!</p>
    </div>
  );
};

export default observer(Dashboard);