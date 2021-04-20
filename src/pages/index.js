import dbConnect from '../utils/dbConnect';
import Pet from '../models/Pet';
import Head from 'next/head';

const Index = ({ pets }) => (
  <>
    <Head>
      <title>ShareParking - Home</title>
    </Head>
    <div className='container'>
      <h1>Home page</h1>
      {/* Create a card for each pet */}
    </div>
  </>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Pet.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets: pets } };
}

export default Index;
