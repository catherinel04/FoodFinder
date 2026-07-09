# What's for Dinner?

A tiny full-stack app: pick a zip code, a range (miles), a budget, and
optionally a cuisine — get back the top 3 matching restaurants.

Everything runs on **mock data** (`backend/data/restaurants.js` and
`backend/data/zipcodes.js`) instead of a real restaurants API, so you can see
exactly how the API and matching logic work end to end.

## Project structure

```
eat-decider/
├── backend/                 Express API
│   ├── data/
│   │   ├── restaurants.js   mock restaurant list
│   │   └── zipcodes.js      mock zip -> lat/lng lookup (stand-in for geocoding)
│   ├── routes/
│   │   └── restaurants.js   GET /api/restaurants
│   ├── utils/
│   │   └── matcher.js       distance calc (Haversine) + scoring/ranking
│   └── server.js
└── frontend/                React (Vite)
    └── src/
        ├── api.js           fetch wrapper for the backend
        ├── App.jsx
        └── components/
            ├── SearchForm.jsx
            └── RestaurantCard.jsx
```

## How matching works

1. **Distance** — each restaurant's zip code is looked up in a mock
   zip→coordinates table, and the [Haversine formula](https://en.wikipedia.org/wiki/Haversine_formula)
   computes straight-line distance from your zip. This is the same math a
   real app would use once it has coordinates — the only mocked part is
   *getting* the coordinates (normally a geocoding API call).
2. **Hard filters** — restaurants outside your `range` or above your
   `budget` are dropped.
3. **Scoring** — remaining restaurants get a score from rating (biggest
   factor), distance (closer is better), an exact cuisine match (+25 bonus),
   and a small bonus for costing less than your max budget.
4. Top 3 scores win.

## Running it

You'll need Node.js installed. Two terminals:

```bash
# Terminal 1 — backend
cd backend
npm install
npm run dev        # http://localhost:4000

# Terminal 2 — frontend
cd frontend
npm install
npm run dev         # http://localhost:5173
```

Vite is configured to proxy `/api/*` requests to `http://localhost:4000`, so
the frontend can just call `fetch("/api/restaurants?...")` with no CORS
headaches during development.

Try zip code `02026` (Dedham) with a 10 mile range — the mock data is
concentrated around a handful of Boston-area zip codes (see
`backend/data/zipcodes.js` for the full list).

## Extending this later

- Swap `backend/data/*.js` for a real database (SQLite/Postgres) — the
  route and matcher don't need to change much, just where the arrays come
  from.
- Swap the mock zip lookup for a real geocoding API (e.g. Zippopotam.us,
  Google Geocoding) — only `getCoordsForZip` in `matcher.js` needs to change.
- Add pagination, more filters (open now, dietary restrictions), or a map view.
