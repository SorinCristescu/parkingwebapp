import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import styled from 'styled-components';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import * as places from '../places.json';

// import Map from '../components/Map';
const Map = dynamic(() => import('../components/Map'), {
  loading: () => 'Loading...',
  ssr: false,
});

export default function FindAPlace() {
  // Dropdown

  const options = [
    {
      value: 'Bucuresti, Ro',
      label: 'Bucuresti, Ro',
      coordinates: { latitude: 44.443623, longitude: 26.095316 },
    },
    {
      value: 'Cluj, Ro',
      label: 'Cluj, Ro',
      coordinates: { latitude: 46.770668, longitude: 23.603121 },
    },
    {
      value: 'Constanta, Ro',
      label: 'Constanta, Ro',
      coordinates: { latitude: 44.168153, longitude: 28.635491 },
    },
    {
      value: 'Timisoara, Ro',
      label: 'Timisoara, Ro',
      coordinates: { latitude: 45.756136, longitude: 21.229291 },
    },
    {
      value: 'Iasi, Ro',
      label: 'Iasi, Ro',
      coordinates: { latitude: 47.160318, longitude: 27.584908 },
    },
    {
      value: 'Brasov, Ro',
      label: 'Brasov, Ro',
      coordinates: { latitude: 45.647897, longitude: 25.600924 },
    },
  ];
  const defaultOption = options[0];
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleDropdown = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log('selectedOption', selectedOption);
  };
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
        <div className="dropdown">
          <h4>Find a place in</h4>
          <Dropdown
            options={options}
            onChange={handleDropdown}
            selectedOption={selectedOption}
            placeholder="Select a city"
          />
        </div>

        <div className="map">
          <Map markers={places} selectedCity={selectedOption} />
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 100px;
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

  .dropdown {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
  }

  .map {
    /* margin-top: 50px; */
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
