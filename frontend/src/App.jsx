import { useState } from "react";
import SearchForm from "./components/SearchForm.jsx";
import RestaurantCard from "./components/RestaurantCard.jsx";
import { fetchMatches } from "./api.js";

export default function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  async function handleSearch(params) {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMatches(params);
      setResults(data.results);
    } catch (err) {
      setError(err.message);
      setResults(null);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  }

  return (
    <>
      <header className="header">
        <p className="eyebrow">Order Up</p>
        <h1>What's for Dinner?</h1>
        <p>Tell us where you are, how far you'll go, and what you'll spend.</p>
      </header>

      <SearchForm onSearch={handleSearch} loading={loading} />

      {error && <div className="error-banner">{error}</div>}

      {!error && searched && results && results.length === 0 && (
        <div className="empty-state">
          Nothing matched. Try widening your range or budget.
        </div>
      )}

      {!error && results && results.length > 0 && (
        <section className="results">
          <h2 className="results-heading">Tonight's Top Picks</h2>
          {results.map((r, i) => (
            <RestaurantCard key={r.id} restaurant={r} rank={i + 1} />
          ))}
        </section>
      )}

      <p className="hint">
        Demo covers zip codes around the Boston area (02026, 02108, 02139, 02458, and others).
      </p>
    </>
  );
}
