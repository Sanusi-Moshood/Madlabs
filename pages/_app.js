import Layout from '../components/Layout';
import '../styles/globals.css';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 11000);
  });

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href="@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
"
        />
      </Head>

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
