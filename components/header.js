import React from 'react';
import styles from './layout.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>code000</h1>
      <nav>
          <a href="/" className={styles.card}>ホーム</a>
          <a href="/about">アバウト</a>
      </nav>
    </header>
  );
};
