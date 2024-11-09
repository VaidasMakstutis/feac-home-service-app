const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const { categoriesRouter } = require("./categories");
const { businessesRouter } = require("./businesses");
const { bookingsRouter } = require("./bookings");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/categories", categoriesRouter);
app.use("/api/businesses", businessesRouter);
app.use("/api/bookings", bookingsRouter);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));
