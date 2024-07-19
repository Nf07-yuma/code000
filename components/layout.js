import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout ({ children }) {
  return (
    <div>
      <Head></Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
