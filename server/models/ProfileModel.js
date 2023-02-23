const { model, Schema } = require("mongoose");

const profileSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		profilePicture: {
			type: String,
			default:
				"https://res.cloudinary.com/hostingimagesservice/image/upload/v1674787878/eduBangla/images/default-profile_ka1ukw.png",
		},
		profilePictureCloudinaryId: String,
		about: String,
		email: {
			type: String,
			lowercase: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("Profile", profileSchema);
