const { model, Schema } = require("mongoose");

const helpSchema = new Schema({
  helpName: {
    type: String,
    required: true,
    trim: true,
  },
  helpAddress: {
    type: String,
    required: true,
    trim: true,
  },
  helpAvatar: {
    type: String,
    default:
      "https://res.cloudinary.com/dyuykdb4p/image/upload/v1683788773/NDAS/wp2381640_lljdz0.jpg",
  },
  helpAvatarCloudinaryId: String,
});

module.exports = model("Help", helpSchema);
