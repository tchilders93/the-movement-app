import { useState } from "react";
import movementsData from "../public/data/movements.json";

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredMovements = movementsData.movement_patterns.filter((m) =>
    m.movement_pattern.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movement App</h1>
      <p>Search regressions, progressions, and movement patterns.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search movements..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "100%", marginTop: "20px" }}
      />

      {/* Results List */}
      <ul style={{ marginTop: "20px" }}>
        {filteredMovements.map((movement) => (
          <li key={movement.movement_pattern} style={{ margin: "10px 0" }}>
            <a
              href={`/movements/${encodeURIComponent(
                movement.movement_pattern
              )}`}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {movement.movement_pattern}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
