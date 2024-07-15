'use client';

import styles from "./Header.module.scss"
import Link from "next/link";
import { observer } from 'mobx-react-lite';
import authStore from "@/stores/AuthStore";

const Header = observer(() => { 
  return (
    <div className={styles.header}>
        <nav className={styles.header__nav}>
            <Link href="/" className={styles.header__nav__link}>
                    <p>Home</p>
            </Link>
            <Link href="/dashboard" className={styles.header__nav__link}>
                    <p>Dashboard</p>
            </Link>
            {authStore.isAuthorized && (
          <button className={styles.logout__button} onClick={authStore.logout}>Log out</button>
        )}
        </nav>
    </div>
    );
});

export default Header;