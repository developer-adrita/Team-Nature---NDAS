const { model, Schema } = require("mongoose");

const messageSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		body: {
			type: String,
			required: true,
			maxLength: 1000,
		},
	},
	{ timestamps: true }
);

module.exports = model("Message", messageSchema);
