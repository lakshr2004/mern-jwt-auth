require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Database connect
connectDB();

// CORS Configuration (IMPORTANT)
app.use(cors({
  origin: "http://localhost:5173", // React (Vite) port
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Default Route (optional but good)
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
