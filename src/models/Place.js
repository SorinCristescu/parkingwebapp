import mongoose, { now } from 'mongoose';

/* PlaceSchema will correspond to a collection in your MongoDB database. */
const PlaceSchema = new mongoose.Schema({
  owner: {
    /* The owner of this place */
    type: String,
    required: [true, "Please provide the place owner's name"],
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  location: {
    street_address: {
      type: String,
      required: [true, 'Please provide a street address for this place'],
      maxlength: [20, "Owner's Name cannot be more than 60 characters"],
    },
    city: {
      type: String,
      required: [true, 'Please provide a city for this place'],
      maxlength: [20, "Owner's Name cannot be more than 60 characters"],
    },
    state: {
      type: String,
      required: [true, 'Please provide a state for this place'],
      maxlength: [20, "Owner's Name cannot be more than 60 characters"],
    },
    country: {
      type: String,
      required: [true, 'Please provide a country for this place'],
      maxlength: [20, "Owner's Name cannot be more than 60 characters"],
    },
    coordinates: {
      latitude: {
        type: Point,
        required: [true, 'Please provide the place latitude'],
      },
      longitude: {
        type: Point,
        required: [true, 'Please provide the place longitude'],
      },
    },
  },

  description: {
    type: String,
    required: [true, 'Please provide a description for this place.'],
    maxlength: [200, 'Name cannot be more than 100 characters'],
  },

  images_url: {
    required: [true, 'Please provide an image url for this place.'],
    type: String,
  },
  id_document: {
    type: String,
    required: [true, "Please provide the owner's id_document"],
    maxlength: [200, "Owner's Name cannot be more than 100 characters"],
  },
});

export default mongoose.models.Place || mongoose.model('Place', PlaceSchema);
