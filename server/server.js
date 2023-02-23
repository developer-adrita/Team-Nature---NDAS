require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorHandler");
const setMiddlewares = require("./middlewares/middlewares");
const setRoutes = require("./routes/routes");

//set middlewares and routes
setMiddlewares(app);
setRoutes(app);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;


connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.info(`Server running at port:${PORT}`);
		});
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
