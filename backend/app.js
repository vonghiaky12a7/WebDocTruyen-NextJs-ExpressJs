const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const storyRoutes = require("./routes/storyRoutes");
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");
const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:8092", "http://localhost:8092/users"], // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    credentials: true, // Allow credentials if needed
  })
);
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/stories", storyRoutes);
app.use("/roles", roleRoutes);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
