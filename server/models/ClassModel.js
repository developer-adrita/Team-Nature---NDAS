const { model, Schema } = require("mongoose");

const classSchema = new Schema({
	classTitle: {
		type: String,
		required: true,
		trim: true,
	},
	classAvatar: {
		type: String,
		default:
			"https://res.cloudinary.com/hostingimagesservice/image/upload/v1674789496/eduBangla/images/default-class-avatar_ipetqv.jpg",
	},
});

module.exports = model("Class", classSchema);
