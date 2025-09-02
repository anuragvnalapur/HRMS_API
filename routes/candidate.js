// routes/candidate.js
const express = require("express");
const Candidate = require("../models/Candidate");
const router = express.Router();

// 1️⃣ Post candidate data (Upsert)
router.post("/", async (req, res) => {
  try {
    const { name, experience, skills, qualification, certifications, job_id } = req.body;

    // upsert candidate
    const candidate = await Candidate.findOneAndUpdate(
      { name }, // here you can also use email/phone as unique identifier
      {
        name,
        experience,
        skills,
        qualification,
        certifications,
        $addToSet: { applied_for: job_id } // prevents duplicate job_id
      },
      { new: true, upsert: true }
    );

    res.json(candidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2️⃣ Get all candidate data
router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3️⃣ Get candidates based on job_id
router.get("/job/:job_id", async (req, res) => {
  try {
    const { job_id } = req.params;
    const candidates = await Candidate.find({ applied_for: job_id });
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
