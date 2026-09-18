require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(morgan("dev"));

app.use("/api/login", authRoutes); //1er error, debería ser /api/login en vez de /api/login
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes); //dos rutas con el mismo nombre para algo distinto, en vez de /api/users podría ser /api/admin

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Operacion Rescate II"
  });
});

app.use(errorHandler);

module.exports = app;
