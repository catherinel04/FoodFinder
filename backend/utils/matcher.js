const ZIPCODES = require("../data/zipcodes");

const EARTH_RADIUS_MILES = 3958.8;

function toRadians(deg) {
  return (deg * Math.PI) / 180;
}

// Haversine formula: standard way to get straight-line distance between
// two lat/lng points on a sphere. Real "driving distance" would need a
// maps/directions API, but this is a solid approximation for "how far away".
function distanceInMiles(lat1, lng1, lat2, lng2) {
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_MILES * c;
}

function getCoordsForZip(zipcode) {
  return ZIPCODES[zipcode] || null;
}

/**
 * Filters and scores restaurants against the user's search criteria.
 *
 * @param {Array} restaurants - full restaurant list
 * @param {Object} params
 * @param {string} params.zipcode - user's zipcode
 * @param {number} params.range - max distance willing to travel, in miles
 * @param {number} params.budget - max budget tier, 1-4 ($ to $$$$)
 * @param {string} [params.cuisine] - optional preferred cuisine
 * @returns {Array} top matches, sorted best-first, each with distance/score attached
 */
function findMatches(restaurants, { zipcode, range, budget, cuisine }) {
  const origin = getCoordsForZip(zipcode);
  if (!origin) {
    const err = new Error(
      `Unknown zipcode "${zipcode}". This demo only knows a handful of MA zip codes.`
    );
    err.status = 400;
    throw err;
  }

  const withDistance = restaurants
    .map((r) => {
      const coords = getCoordsForZip(r.zipcode);
      if (!coords) return null;
      const distance = distanceInMiles(origin.lat, origin.lng, coords.lat, coords.lng);
      return { ...r, distance: Math.round(distance * 10) / 10 };
    })
    .filter(Boolean);

  // Hard filters: must be within range and at or under the user's budget.
  const inRange = withDistance.filter(
    (r) => r.distance <= range && r.budget <= budget
  );

  // Scoring: rating matters most, being closer is better, an exact cuisine
  // match gets a meaningful boost, and being cheaper than the max budget
  // gets a small bonus (rewards value, doesn't just chase the cap).
  const scored = inRange.map((r) => {
    let score = r.rating * 20; // 0-100 scale baseline
    score -= r.distance * 3; // closer is better
    score += (budget - r.budget) * 2; // cheaper-than-cap bonus
    if (cuisine && r.cuisine.toLowerCase() === cuisine.toLowerCase()) {
      score += 25;
    }
    return { ...r, score: Math.round(score * 10) / 10 };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 3);
}

module.exports = { findMatches, distanceInMiles, getCoordsForZip };
