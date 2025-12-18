import { useState } from "react";
import Layout from "../components/Layout";
import movementsData from "../data/movements.json";

export default function Home() {
  const [search, setSearch] = useState("");

  const movements = movementsData.movement_patterns;

  const filteredMovements = movements.filter((m) =>
    m.movement_pattern.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h1>Movement App</h1>

      <input
        type="text"
        placeholder="Search movement patterns..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "16px",
        }}
      />

      <ul>
        {filteredMovements.map((movement, index) => (
          <li key={index}>
            <a href={`/movements/${index}`}>
              {movement.movement_pattern}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
