import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  _id: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
  },
  name: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the pet owner's name"],
  },
  email: {
    /* The species of your pet */

    type: String,
    required: [true, 'Please specify the species of your pet.'],
  },
  image: {
    /* Pet's age, if applicable */

    type: String,
  },
  createdAt: {
    /* Boolean poddy_trained value, if applicable */

    type: Date,
  },
  updatedAt: {
    /* List of dietary needs, if applicable */

    type: Date,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
