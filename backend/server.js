require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json()); // ✅ VERY IMPORTANT

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

sequelize.sync().then(() => {
  console.log("DB Connected");
  app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
  });
}).catch(err => console.log(err));