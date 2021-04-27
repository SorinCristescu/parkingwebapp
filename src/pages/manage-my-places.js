import Head from 'next/head';
import Map from '../components/Map';

function ManageMyPlaces() {
  return (
    <div>
      <Head>
        <title>ShareParking - Manage my places</title>
      </Head>
      <div className='container'>
        <Map addPin={true} />
      </div>
    </div>
  );
}

export default ManageMyPlaces;
