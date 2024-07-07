import React from 'react';
import Header from './header'; // ヘッダーコンポーネント（必要に応じて作成）
import Footer from './footer'; // フッターコンポーネント（必要に応じて作成）

export default function Layout ({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
