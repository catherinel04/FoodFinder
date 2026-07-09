import { useState } from "react";

const BUDGET_OPTIONS = [
  { value: 1, label: "$" },
  { value: 2, label: "$$" },
  { value: 3, label: "$$$" },
  { value: 4, label: "$$$$" },
];

const CUISINE_OPTIONS = [
  "Italian",
  "Mexican",
  "Chinese",
  "Japanese",
  "Indian",
  "Thai",
  "American",
  "BBQ",
  "Pizza",
  "Vegan",
  "Mediterranean",
  "Seafood",
  "Burgers",
  "French",
  "Korean",
];

export default function SearchForm({ onSearch, loading }) {
  const [zipcode, setZipcode] = useState("");
  const [range, setRange] = useState(5);
  const [budget, setBudget] = useState(2);
  const [cuisine, setCuisine] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ zipcode, range, budget, cuisine });
  }

  return (
    <form className="order-pad" onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="zipcode">Zip code</label>
          <input
            id="zipcode"
            type="text"
            inputMode="numeric"
            placeholder="02026"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value.trim())}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="range">Range (miles)</label>
          <input
            id="range"
            type="number"
            min="1"
            max="50"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="budget">Budget</label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="cuisine">Cuisine (optional)</label>
          <select
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="">Any</option>
            {CUISINE_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="submit-btn" type="submit" disabled={loading}>
        {loading ? "Finding a table…" : "Decide for me"}
      </button>
    </form>
  );
}
