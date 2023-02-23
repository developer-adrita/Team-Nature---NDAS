const { model, Schema } = require("mongoose");

const audioModel = new Schema({
	topic: {
		type: String,
		required: true,
	},
	audioTitle: {
		type: String,
		required: true,
		trim: true,
	},
	audio: {
		type: String,
	},
	audioCloudinaryId: String,
});

module.exports = model("Audio", audioModel);
