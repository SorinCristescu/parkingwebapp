import { useRouter } from 'next/router';
import useSWR from 'swr';
import Form from '../../components/Form';

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditPlace = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: place, error } = useSWR(
    id ? `/api/places/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!place) return <p>Loading...</p>;

  const placeForm = {
    owner: place.owner,
    street_address: place.street_address,
    city: place.city,
    state: place.state,
    country: place.country,
    description: place.description,
    images_url: place.images_url,
    id_document: place.id_document,
  };

  return (
    <Form formId='edit-place-form' placeForm={placeForm} forNewPlace={false} />
  );
};

export default EditPet;
