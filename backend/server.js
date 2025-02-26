require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000; // Mặc định PORT = 5000 nếu chưa đặt biến môi trường

// Kết nối database và khởi động server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1); // Thoát chương trình nếu kết nối DB thất bại
  });
