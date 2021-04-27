import Head from 'next/head';

import styled from 'styled-components';
import Button from '../components/Button';
import Map from '../components/Map';

function ManageMyPlaces() {
  return (
    <div>
      <Head>
        <title>ShareParking - Manage my places</title>
      </Head>
      <Section url="/images/marina.png">
        <div className="create-space">
          <h4>Manage my space(s)</h4>
          <Button title="+ Create space" width="155px" />
        </div>
        <h1>
          List your private parking space(s), car park, or boat moorings on
          ShareParking to start earning money today
        </h1>
        <Map addPin={true} />
      </Section>
    </div>
  );
}

export default ManageMyPlaces;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 100px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .create-space {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0 50px 0;
  }

  h1 {
    width: 70%;
    font-weight: 600;
    font-size: 64px;
    line-height: 83px;
    text-align: center;
    color: #f2f2f2;
  }
  h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 64px;
    letter-spacing: 0.5px;
    color: #f2f2f2;
  }
`;
