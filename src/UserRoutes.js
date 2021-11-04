const router = require("express").Router();

// express login get route for user with the app variable
router.get("/login", (req, res) => {
	res.render("login", { validationErrors: [] });
});

// express login route for user with the app variable
router.post("/login", (req, res) => {
	// console.log(req.body);
	res.render("login", { validationErrors: ["Geen user gevonden"] });
});

// express logout route for user with the app variable
router.get("/logout", (req, res) => {
	res.send("logout");
});

// express register route for user with the app variable
router.post("/register", (req, res) => {
	res.send("register");
});

// express profile route for user with the app variable
router.get("/profile", (req, res) => {
	res.send("profile");
});

// express update route for user with the app variable
router.post("/update", (req, res) => {
	res.send("update");
});

module.exports = router;
