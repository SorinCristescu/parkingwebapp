import Form from '../components/Form';

const NewPlace = () => {
  const placeForm = {
    owner: '',
    location: {
      street_address: '',
      city: '',
      state: '',
      country: '',
      coordinates: {
        latitude: '',
        longitude: '',
      },
    },

    description: '',
    images_url: '',
    id_document: '',
  };

  return (
    <div style={{ marginTop: '100px', width: '400px' }}>
      <Form formId='add-place-form' placeForm={placeForm} />
    </div>
  );
};

export default NewPlace;
