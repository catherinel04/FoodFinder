const BUDGET_SYMBOLS = ["$", "$$", "$$$", "$$$$"];

export default function RestaurantCard({ restaurant, rank }) {
  return (
    <div className="ticket">
      <span className="ticket-rank">{String(rank).padStart(2, "0")}</span>
      <div className="ticket-top">
        <h3>{restaurant.name}</h3>
        <span className="ticket-budget">{BUDGET_SYMBOLS[restaurant.budget - 1]}</span>
      </div>
      <div className="ticket-meta">
        <span className="ticket-tag">★ {restaurant.rating.toFixed(1)}</span>
        <span className="ticket-tag">{restaurant.distance} mi away</span>
      </div>
      <span className="ticket-cuisine">{restaurant.cuisine}</span>
    </div>
  );
}
