const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const storyRoutes = require("./routes/storyRoutes");
const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");
const app = express();

// Middleware

// Sử dụng morgan để log các yêu cầu HTTP
app.use(morgan("short"));

app.use(
  cors({
    origin: "*", // Allow all origins // Thay thế bằng URL frontend của bạn
    methods: ["GET", "POST", "PUT", "DELETE"], // Chỉ định các phương thức được phép
    credentials: true, // Cho phép credentials nếu cần
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
