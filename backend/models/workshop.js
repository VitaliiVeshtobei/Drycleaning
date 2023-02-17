const { Schema, model } = require('mongoose');

const workshopSchema = new Schema(
  {
    photo: { type: String },
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: true,
    },
    description: {
      type: String,
    },
    services: {
      type: [Object],
    },
    // avatarURL: {
    //   type: String,
    //   required: true,
    // },
  },
  { versionKey: false, timestamps: true }
);

const Workshop = model('workshop', workshopSchema);

module.exports = { Workshop };
