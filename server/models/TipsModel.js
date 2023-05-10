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
  topicAvatar: {
    type: String,
    default:
      "https://res.cloudinary.com/hostingimagesservice/image/upload/v1674789496/eduBangla/images/default-class-avatar_ipetqv.jpg",
  },
});

module.exports = model("Topic", topicSchema);
