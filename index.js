const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();

const reviewRoutes = require("./routes/Review.routes");
const productRoutes = require("./routes/Product.routes");
const userRoutes = require("./routes/User.routes");
const orderRoutes = require("./routes/Order.routes");

const errorHandler = require("./middleware/errorHandler");
// const notFoundHandler = require("./middleware/notFoundHandler");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
morgan("tiny");

// Configuring body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successful!"))
  .catch((err) => console.log("error", err));


app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public/index.html'));
});

app.use("/api/review", reviewRoutes);
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);



// 404 handler
// app.use(notFoundHandler);
// error handler
app.use(errorHandler);

app.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});
