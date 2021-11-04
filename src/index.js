const express = require("express");

const userRouter = require("./UserRoutes");

const app = express();
const router = express.Router();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", userRouter);

// Set routes
app.get("/", (req, res) => {
	res.render("index");
});

// Start server
app.listen(3000, () => {
	console.log("Server started on port 3000");
});

module.exports = {
	app,
	router,
};
