import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startClock } from '../store/places/actions';

import Counter from '../components/Counter';
import Clock from '../components/Clock';

const Bookings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>ShareParking - Bookings</title>
      </Head>
      <div>
        <h1>Bookings page</h1>
        <Counter />
        <Clock />
      </div>
    </>
  );
};

export default Bookings;
