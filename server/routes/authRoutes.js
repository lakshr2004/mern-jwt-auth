const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Protected route
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;
