const { model, Schema } = require("mongoose");

const topicSchema = new Schema({
  topicName: {
    type: String,
    required: true,
    trim: true,
  },
  topicDesc: {
    type: String,
    required: true,
    trim: true,
  },
  topicDescOne: {
    type: String,
    required: true,
    trim: true,
  },
  topicDescTwo: {
    type: String,
    required: true,
    trim: true,
  },
  topicDescThree: {
    type: String,
    required: true,
    trim: true,
  },
  topicAvatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dyuykdb4p/image/upload/v1683788773/NDAS/wp2381640_lljdz0.jpg",
  },
  topicAvatarCloudinaryId: String,
});

module.exports = model("Tip", topicSchema);
