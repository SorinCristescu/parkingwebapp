import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dbConnect from '../../utils/dbConnect';
import Place from '../../models/Pet';

/* Allows you to view pet card info and delete pet card*/
const PlacePage = ({ place }) => {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const handleDelete = async () => {
    const placeID = router.query.id;

    try {
      await fetch(`/api/places/${placeID}`, {
        method: 'Delete',
      });
      router.push('/');
    } catch (error) {
      setMessage('Failed to delete the place.');
    }
  };

  return (
    <div key={place._id}>
      <div className='card'>
        <img src={place.image_url} />
        <h5 className='pet-name'>{place.description}</h5>
        <div className='main-content'>
          <p className='pet-name'>{place.name}</p>
          <p className='owner'>Address: {place.street_address}</p>
          <p className='owner'>City: {place.city}</p>
          <p className='owner'>Country: {place.country}</p>
          {/* Extra Pet Info: Likes and Dislikes */}
          {/* <div className='likes info'>
            <p className='label'>Likes</p>
            <ul>
              {place.likes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>
          <div className='dislikes info'>
            <p className='label'>Dislikes</p>
            <ul>
              {place.dislikes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div> */}

          <div className='btn-container'>
            <Link href='/[id]/edit' as={`/${place._id}/edit`}>
              <button className='btn edit'>Edit</button>
            </Link>
            <button className='btn delete' onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const place = await Place.findById(params.id).lean();
  place._id = place._id.toString();

  return { props: { place } };
}

export default PlacePage;
