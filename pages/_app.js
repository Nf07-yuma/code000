import '../styles/global.css';
import Layout from '../components/layout'; // レイアウトコンポーネントをインポート

export default  function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
