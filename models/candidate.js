// models/Candidate.js
const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  experience: { type: Number, required: true },
  skills: [String],
  qualification: String,
  certifications: [String],
  applied_for: [String] // stores job_id(s)
});

module.exports = mongoose.model("Candidate", CandidateSchema);
