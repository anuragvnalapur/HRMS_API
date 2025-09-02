// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const candidateRoutes = require("./routes/candidate");
const jobRoutes = require("./routes/jobListing");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://anuragvnalapur_db_user:WFG1EVBpRZyBM2SC@cluster0.tm67wza.mongodb.net/HRMS_API", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));


app.use("/api/candidates", candidateRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
