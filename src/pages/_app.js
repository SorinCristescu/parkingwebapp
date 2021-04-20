import { Provider } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';

import '../css/style.css';

import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <main>
        <Header />
        <div className='grid wrapper'>
          <Component {...pageProps} />
        </div>
      </main>
    </Provider>
  );
}

export default MyApp;
