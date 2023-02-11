import Layout from '../components/Layout';
import '../styles/globals.css';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 12000);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
