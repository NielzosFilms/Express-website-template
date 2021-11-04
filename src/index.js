const express = require("express");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const userRoutes = require("./UserRoutes");

const oneDay = 1000 * 60 * 60 * 24;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	session({
		secret: uuidv4(),
		saveUninitialized: true,
		cookie: { maxAge: oneDay },
		resave: false,
	})
);

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", userRoutes);

// Set routes
app.get("/", (req, res) => {
	console.log(req.session);
	res.render("index", { user: req.session.user });
});

// Start server
app.listen(3000, () => {
	console.log("Server started on port 3000");
});

module.exports = app;
