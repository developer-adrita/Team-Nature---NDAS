const { model, Schema } = require("mongoose");

const donorSchema = new Schema({
  donorName: {
    type: String,
    required: true,
    trim: true,
  },
  donorEmail: {
    type: String,
    required: true,
    trim: true,
  },
  donorPhone: {
    type: String,
    required: true,
    trim: true,
  },
  donorAmount: {
    type: String,
    required: true,
    trim: true,
  },
  donorQuery: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("Donor", donorSchema);
