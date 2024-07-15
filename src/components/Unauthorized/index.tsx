'use client';

import styles from "./Unauthorized.module.scss"
import Link from "next/link";

export default function Unauthorized() {

  return (
    <div className={styles.body}>
        <p>You are not authorized to access this page. Please <Link href="/">log in</Link></p>
    </div>
  );
}