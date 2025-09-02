// routes/jobListing.js
const express = require("express");
const JobListing = require("../models/JobListing");
const router = express.Router();

// 1️⃣ Post job listing
router.post("/", async (req, res) => {
  try {
    const job = new JobListing(req.body);
    await job.save();
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2️⃣ Get all job listings
router.get("/", async (req, res) => {
  try {
    const jobs = await JobListing.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
