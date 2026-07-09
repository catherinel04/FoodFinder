// Mock restaurant data. In a real app this table would live in a database
// and/or be populated from a provider like Yelp or Google Places.
// budget: 1-4, matching $ to $$$$ conventions.
// rating: 1.0-5.0 (like a Yelp/Google star rating).

const RESTAURANTS = [
  { id: 1, name: "Nonna's Table", zipcode: "02026", cuisine: "Italian", budget: 2, rating: 4.6 },
  { id: 2, name: "Trattoria Dedham", zipcode: "02026", cuisine: "Italian", budget: 3, rating: 4.3 },
  { id: 3, name: "Dedham Smokehouse", zipcode: "02026", cuisine: "BBQ", budget: 2, rating: 4.4 },
  { id: 4, name: "Sakura Sushi Bar", zipcode: "02026", cuisine: "Japanese", budget: 3, rating: 4.5 },
  { id: 5, name: "El Camino Taqueria", zipcode: "02062", cuisine: "Mexican", budget: 1, rating: 4.2 },
  { id: 6, name: "Norwood Diner", zipcode: "02062", cuisine: "American", budget: 1, rating: 4.0 },
  { id: 7, name: "Spice Route", zipcode: "02492", cuisine: "Indian", budget: 2, rating: 4.7 },
  { id: 8, name: "Needham Noodle House", zipcode: "02492", cuisine: "Chinese", budget: 2, rating: 4.1 },
  { id: 9, name: "Westwood Grille", zipcode: "02090", cuisine: "American", budget: 3, rating: 4.3 },
  { id: 10, name: "Canton Curry Co.", zipcode: "02021", cuisine: "Thai", budget: 2, rating: 4.4 },
  { id: 11, name: "Beacon Hill Bistro", zipcode: "02108", cuisine: "French", budget: 4, rating: 4.8 },
  { id: 12, name: "Boston Chowder House", zipcode: "02108", cuisine: "Seafood", budget: 4, rating: 4.6 },
  { id: 13, name: "Government Center Gyro", zipcode: "02108", cuisine: "Mediterranean", budget: 1, rating: 4.2 },
  { id: 14, name: "Cambridge Ramen Lab", zipcode: "02139", cuisine: "Japanese", budget: 2, rating: 4.5 },
  { id: 15, name: "Central Square Tacos", zipcode: "02139", cuisine: "Mexican", budget: 1, rating: 4.3 },
  { id: 16, name: "Green Leaf Vegan Kitchen", zipcode: "02139", cuisine: "Vegan", budget: 2, rating: 4.4 },
  { id: 17, name: "Newton Pizza Co.", zipcode: "02458", cuisine: "Pizza", budget: 1, rating: 4.1 },
  { id: 18, name: "Waban Kitchen", zipcode: "02465", cuisine: "American", budget: 3, rating: 4.5 },
  { id: 19, name: "Brookline Burger Bar", zipcode: "02445", cuisine: "Burgers", budget: 2, rating: 4.3 },
  { id: 20, name: "Seoul Garden", zipcode: "02445", cuisine: "Korean", budget: 2, rating: 4.6 },
  { id: 21, name: "Quincy Bay Seafood", zipcode: "02169", cuisine: "Seafood", budget: 3, rating: 4.4 },
  { id: 22, name: "Braintree BBQ Pit", zipcode: "02184", cuisine: "BBQ", budget: 2, rating: 4.2 },
  { id: 23, name: "Somerville Slice", zipcode: "02143", cuisine: "Pizza", budget: 1, rating: 4.0 },
  { id: 24, name: "Union Square Thai", zipcode: "02143", cuisine: "Thai", budget: 2, rating: 4.5 },
  { id: 25, name: "Waltham Wok", zipcode: "02451", cuisine: "Chinese", budget: 1, rating: 3.9 },
  { id: 26, name: "Moody Street Mezze", zipcode: "02451", cuisine: "Mediterranean", budget: 2, rating: 4.6 },
  { id: 27, name: "Roxbury Roots Vegan", zipcode: "02120", cuisine: "Vegan", budget: 2, rating: 4.3 },
  { id: 28, name: "Dudley Square Diner", zipcode: "02120", cuisine: "American", budget: 1, rating: 4.0 },
];

module.exports = RESTAURANTS;
