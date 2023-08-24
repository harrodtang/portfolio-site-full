require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");

const contactMeRoutes = require("./routes/contactMeRoutes");

// app is our express application
const app = express();

// creating middleware
app.use(express.json());
app.use(cors());

app.use("/", contactMeRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname__, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5001;
app.listen(port, console.log("Server listening on port:", port));
