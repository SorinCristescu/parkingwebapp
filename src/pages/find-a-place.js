import Head from 'next/head';
import dynamic from 'next/dynamic';

import * as places from '../places.json';

// import Map from '../components/Map';
const Map = dynamic(() => import('../components/Map'), {
  loading: () => 'Loading...',
  ssr: false,
});
export default function FindAPlace() {
  return (
    <>
      <Head>
        <title>ShareParking - Find a place</title>
      </Head>
      <div className='container'>
        <Map markers={places} />
      </div>
    </>
  );
}
