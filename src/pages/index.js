import dbConnect from '../utils/dbConnect';
import User from '../models/User';
import Place from '../models/Place';
import Head from 'next/head';
import Link from 'next/link';

const Index = ({ users, places }) => {
  console.log(users, places);
  return (
    <>
      <Head>
        <title>ShareParking - Home</title>
      </Head>
      <div className='container'>
        <h1>Home page</h1>
        {
          /* Create a card for each pet */
          places &&
            places.map((place) => (
              <div>
                <Link href='/[id]' as={`/${place._id}`}>
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
  const resultPlaces = await Place.find({});
  const places = resultPlaces.map((doc) => {
    const place = doc.toObject();
    place._id = place._id.toString();
    return place;
  });

  return { props: { users, places } };
}

export default Index;
