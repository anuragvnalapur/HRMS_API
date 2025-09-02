// models/JobListing.js
const mongoose = require("mongoose");

const JobListingSchema = new mongoose.Schema({
  job_description: { type: String, required: true },
  location: String,
  employment_type: String,
  role: String,
  experience: Number,
  skillset: [String]
});

module.exports = mongoose.model("JobListing", JobListingSchema);
