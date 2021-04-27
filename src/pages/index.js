import dbConnect from '../utils/dbConnect';
import User from '../models/User';
// import Place from '../models/Place';
import Head from 'next/head';
import Link from 'next/link';

import Button from '../components/Button';
import DownloadApp from '../components/DownloadApp';
import styled from 'styled-components';

const Index = ({ users, places }) => {
  console.log(users, places);
  return (
    <>
      <Head>
        <title>ShareParking - Home</title>
      </Head>
      <Section url="/images/parking_places.png">
        <div className="left-container">
          <h1 className="hero-title">Making the most out of every space</h1>
          <Button title="Sign up now!" width="325px" />
          <DownloadApp />
        </div>
        <div className="right-container"></div>
      </Section>
      <div className="container">
        {
          /* Create a card for each pet */
          places &&
            places.map((place) => (
              <div key={place._id}>
                <Link href="/[id]" as={`/${place._id}`}>
                  <a>{place.description}</a>
                </Link>
              </div>
            ))
        }
      </div>
    </>
  );
};

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const resultUsers = await User.find({});
  const users = resultUsers.map((doc) => {
    const user = doc.toObject();
    user._id = user._id.toString();
    user.createdAt = user.createdAt.toString();
    user.updatedAt = user.updatedAt.toString();
    return user;
  });
  // const resultPlaces = await Place.find({});
  // const places = resultPlaces.map((doc) => {
  //   const place = doc.toObject();
  //   place._id = place._id.toString();
  //   return place;
  // });

  return {
    props: {
      users,
      // places
    },
  };
}

export default Index;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  background-image: url(${(props) => props.url});

  .left-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .right-container {
    width: 50%;
    height: 100%;
  }

  .hero-title {
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 64px;
    letter-spacing: 0.5px;
    color: #f2f2f2;
    margin-bottom: 50px;
  }

  .subtitle {
  }
`;
