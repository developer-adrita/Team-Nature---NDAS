const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		mongoose.set("strictQuery", false);
		
		const con = await mongoose.connect(process.env.MONGO_URI);

		console.info(`MongoDB connected: ${con.connection.host}`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

module.exports = connectDB;
