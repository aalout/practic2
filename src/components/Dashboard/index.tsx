"use client"

import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import authStore from '@/stores/AuthStore';
import styles from "./Dashboard.module.scss"

const Dashboard = () => {

  const [email, setEmail] = useState('');

  const handleLogout = () => {
    authStore.logout();
  };

  useEffect(() => {
    if (authStore.user && authStore.user.email) {
      setEmail(authStore.user.email);
    }
  }, [authStore.user]); //В ответе сервер не возвращает данные пользователя, только токен, поэтому фича пока не работает:(

  return (
    <div className={styles.body}>
      <section className={styles.body__section}>
        <h1>Dashboard</h1>
        <p>Welcome, {email}!</p>
      <button className={styles.logout} onClick={handleLogout}>
        Logout
      </button>
      <div className={styles.body__section__con}>
      <aside className={styles.body__section__aside}>
      <h2>Features</h2>
      <ul className={styles.body__features}>
        <li className={styles.body__feature__li}>Feature 1</li>
        <li className={styles.body__feature__li}>Feature 2</li>
        <li className={styles.body__feature__li}>Feature 3</li>
        <li className={styles.body__feature__li}>Feature 4</li>
      </ul>
      </aside>
      <aside className={styles.body__section__aside}>
      <h2>Functions</h2>
      <ul className={styles.body__features}>
        <li className={styles.body__feature__li}>Function 1</li>
        <li className={styles.body__feature__li}>Function 2</li>
        <li className={styles.body__feature__li}>Function 3</li>
        <li className={styles.body__feature__li}>Function 4</li>
      </ul>
      </aside>
      </div>
      </section>
    </div>
  );
};

export default observer(Dashboard);
