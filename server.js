const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes")
const PORT = process.env.PORT || 8081;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
);

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Port is now live on: ${PORT}!`);
});

