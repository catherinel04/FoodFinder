// Mock "geocoding" data. In a real app this would come from a geocoding API
// (Google Maps, Zippopotam.us, etc). We hardcode a handful of MA zip codes
// so the matching algorithm has real coordinates to work with.

const ZIPCODES = {
  "02026": { city: "Dedham", lat: 42.2432, lng: -71.1745 },
  "02108": { city: "Boston (Beacon Hill)", lat: 42.3588, lng: -71.0707 },
  "02139": { city: "Cambridge", lat: 42.3736, lng: -71.1097 },
  "02458": { city: "Newton", lat: 42.3370, lng: -71.2092 },
  "02445": { city: "Brookline", lat: 42.3318, lng: -71.1212 },
  "02062": { city: "Norwood", lat: 42.1946, lng: -71.1995 },
  "02492": { city: "Needham", lat: 42.2807, lng: -71.2380 },
  "02169": { city: "Quincy", lat: 42.2529, lng: -71.0023 },
  "02143": { city: "Somerville", lat: 42.3876, lng: -71.0995 },
  "02451": { city: "Waltham", lat: 42.3765, lng: -71.2356 },
  "02021": { city: "Canton", lat: 42.1587, lng: -71.1467 },
  "02184": { city: "Braintree", lat: 42.2079, lng: -71.0011 },
  "02090": { city: "Westwood", lat: 42.2189, lng: -71.2059 },
  "02465": { city: "Waban", lat: 42.3320, lng: -71.2225 },
  "02120": { city: "Roxbury", lat: 42.3311, lng: -71.0940 },
};

module.exports = ZIPCODES;
