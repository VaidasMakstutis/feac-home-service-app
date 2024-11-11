const express = require("express");
const { connectToDb, PORT } = require("./db");
const app = express();
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const { categoriesRouter } = require("./categories");
const { businessesRouter } = require("./businesses");
const { bookingsRouter } = require("./bookings");
const { authRouter } = require("./users");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/categories", categoriesRouter);
app.use("/api/businesses", businessesRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
