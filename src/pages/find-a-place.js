import Head from 'next/head';
import dynamic from 'next/dynamic';

import styled from 'styled-components';
import Button from '../components/Button';
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
      <Section>
        {/* <div className="create-space">
          <h4>Manage my space(s)</h4>
          <Button title="+ Create space" width="155px" />
        </div> */}
        <Map markers={places} />
      </Section>
    </>
  );
}

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  background-color: #0a0a0a;

  .create-space {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
  }

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 64px;
    letter-spacing: 0.5px;
    color: #f2f2f2;
  }
`;
