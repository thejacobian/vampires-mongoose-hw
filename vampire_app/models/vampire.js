const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
  //write your schema fields here
  name: { type: String, required: true, unique: true },
  hair_color: { type: String, required: true, unique: false },
  eye_color: { type: String, default: 'blonde', required: true, unique: false },
  dob: { type: Date, required: true, unique: false },
  loves: [{ type: String }],
  location: { type: String, required: true, unique: false },
  gender: { type: String, required: true, unique: false },
  victims: { type: Number, min: 0, required: false, unique: false },
  title: { type: String },
});

// Here where we instantiate our Model
// Creates in mongodb an 'articles' collection and specifies all documents within adhere to schema
const vampire = mongoose.model('Vampire', vampireSchema);

module.exports = vampire;
