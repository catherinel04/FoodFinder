const express = require("express");
const router = express.Router();
const RESTAURANTS = require("../data/restaurants");
const { findMatches } = require("../utils/matcher");
const ZIPCODES = require("../data/zipcodes");

// GET /api/restaurants?zipcode=02026&range=5&budget=2&cuisine=Italian
router.get("/", (req, res) => {
  const { zipcode, range, budget, cuisine } = req.query;

  if (!zipcode || !range || !budget) {
    return res.status(400).json({
      error: "zipcode, range, and budget are required query params.",
    });
  }

  const rangeNum = Number(range);
  const budgetNum = Number(budget);

  if (Number.isNaN(rangeNum) || rangeNum <= 0) {
    return res.status(400).json({ error: "range must be a positive number (miles)." });
  }
  if (!Number.isInteger(budgetNum) || budgetNum < 1 || budgetNum > 4) {
    return res.status(400).json({ error: "budget must be an integer 1-4 ($ to $$$$)." });
  }

  try {
    const matches = findMatches(RESTAURANTS, {
      zipcode,
      range: rangeNum,
      budget: budgetNum,
      cuisine: cuisine || undefined,
    });

    res.json({
      query: { zipcode, range: rangeNum, budget: budgetNum, cuisine: cuisine || null },
      count: matches.length,
      results: matches,
    });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

// GET /api/restaurants/zipcodes - lets the frontend know which zips are "supported"
router.get("/zipcodes", (req, res) => {
  res.json(
    Object.entries(ZIPCODES).map(([zip, info]) => ({ zip, city: info.city }))
  );
});

module.exports = router;
