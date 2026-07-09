const BASE_URL = "/api/restaurants";

export async function fetchMatches({ zipcode, range, budget, cuisine }) {
  const params = new URLSearchParams({ zipcode, range, budget });
  if (cuisine) params.set("cuisine", cuisine);

  const res = await fetch(`${BASE_URL}?${params.toString()}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Something went wrong.");
  }
  return data;
}

export async function fetchSupportedZipcodes() {
  const res = await fetch(`${BASE_URL}/zipcodes`);
  if (!res.ok) return [];
  return res.json();
}
