const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");

// enviorment variable setup
env.config();

// connect to Database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.kx9pm.mongodb.net/${process.env.MONGO_DB_DBNAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndexes: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
// Route middlewares
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/Admin/auth"));
app.use("/api", require("./routes/category"));
app.use("/api", require("./routes/product"));
app.use("/api", require("./routes/cart"));
app.use("/api", require("./routes/Admin/initialData"));

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
