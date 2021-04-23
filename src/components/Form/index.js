import { useState } from 'react';
import { useRouter } from 'next/router';
import { mutate } from 'swr';

import styles from './Form.module.css';

const Form = ({ formId, placeForm, forNewPlace = true }) => {
  const router = useRouter();
  const contentType = 'application/json';
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    owner: placeForm.owner,
    street_address: placeForm.street_address,
    city: placeForm.city,
    state: placeForm.state,
    country: placeForm.country,
    description: placeForm.description,
    images_url: placeForm.images_url,
    id_document: placeForm.id_document,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/places/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/places/${id}`, data, false); // Update the local data without a revalidation
      router.push('/');
    } catch (error) {
      setMessage('Failed to update place');
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/places', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push('/');
    } catch (error) {
      setMessage('Failed to add place');
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    // const value =
    //   target.name === 'poddy_trained' ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewPlace ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.owner) err.owner = 'Name is required';
    if (!form.street_address) err.street_address = 'Street address is required';
    if (!form.city) err.city = 'City is required';
    if (!form.state) err.state = 'State is required';
    if (!form.country) err.country = 'Country is required';
    if (!form.description) err.description = 'Description is required';
    if (!form.images_url) err.images_url = 'Image URL is required';
    if (!form.id_document) err.id_document = 'ID document URL is required';
    return err;
  };
  return (
    <>
      <form className={styles.form} id={formId} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor='owner'>
          Owner
        </label>
        <input
          className={styles.input}
          type='text'
          maxLength='20'
          name='owner'
          value={form.owner}
          onChange={handleChange}
          required
        />

        <label className={styles.label} htmlFor='street_address'>
          Street Address
        </label>
        <input
          className={styles.input}
          type='text'
          maxLength='20'
          name='street_address'
          value={form.street_address}
          onChange={handleChange}
          required
        />

        <label className={styles.label} htmlFor='city'>
          City
        </label>
        <input
          className={styles.input}
          type='text'
          maxLength='30'
          name='city'
          value={form.city}
          onChange={handleChange}
          required
        />

        <label className={styles.label} htmlFor='state'>
          State
        </label>
        <input
          className={styles.input}
          type='text'
          name='state'
          value={form.state}
          onChange={handleChange}
        />

        <label className={styles.label} htmlFor='country'>
          Country
        </label>
        <input
          className={styles.input}
          type='text'
          name='country'
          checked={form.country}
          onChange={handleChange}
        />

        <label className={styles.label} htmlFor='description'>
          Description
        </label>
        <textarea
          className={styles.textarea}
          name='description'
          maxLength='60'
          value={form.description}
          onChange={handleChange}
        />

        <label className={styles.label} htmlFor='images_url'>
          Image URL
        </label>
        <input
          className={styles.input}
          type='text'
          name='images_url'
          value={form.images_url}
          onChange={handleChange}
          required
        />

        <label className={styles.label} htmlFor='id_document'>
          ID Document URL
        </label>
        <input
          className={styles.input}
          type='text'
          name='id_document'
          value={form.id_document}
          onChange={handleChange}
          required
        />

        <button type='submit' className={styles.btn}>
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;
